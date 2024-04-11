import Row from './components/Row'
import useGameState from './hooks/useGameState'
import { LETTER_REGEX, MAX_LENGTH } from './lib/constants'
import { useKeyDown } from './hooks/useKeyDown'
import CopyResultsButton from './components/CopyResultsButton'
import Button from './components/Button'

// TODO:
// MVP
// - get answer based on date
// - styling
// - feedback for invalid guess
// 2.0
// - animate letter input
// - LONGER WORDS for a true MMO challenge
//   - word get longer as the week goes on?
//   - one really long word for the whole week?

function App() {
  const { guess, setGuess, result, isSubmitted, submit } = useGameState()

  // TODO/DEV: delete this
  useKeyDown(clearState, ['Escape'])

  useKeyDown(addChar, LETTER_REGEX)
  useKeyDown(delChar, ['Backspace'])
  useKeyDown(submit, ['Enter'])

  function addChar(char: string) {
    if (isSubmitted) return
    if (char.length > 1) return
    setGuess((prev) => {
      if (prev.length >= MAX_LENGTH) return prev
      return prev + char.toUpperCase()
    })
  }

  function delChar() {
    if (isSubmitted) return
    setGuess((prev) => {
      if (prev.length <= 0) return prev
      return prev.slice(0, -1)
    })
  }

  function clearState() {
    localStorage.clear()
  }

  return (
    <div className='py-6 gap-4 flex flex-col items-center'>
      <h1>Hello World(le)</h1>
      <Row guess={guess} result={result} isSubmitted={isSubmitted} />
      {!isSubmitted ? (
        <Button
          className='bg-blue-500 text-white font-semibold'
          onClick={submit}
        >
          Submit
        </Button>
      ) : (
        <CopyResultsButton guess={guess} result={result} className='mt-' />
      )}
    </div>
  )
}

export default App
