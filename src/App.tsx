import Row from './components/Row'
import useGameState from './hooks/useGameState'
import { LETTER_REGEX, MAX_LENGTH } from './lib/constants'
import { useKeyDown } from './hooks/useKeyDown'
import CopyResultsButton from './components/CopyResultsButton'
import Keyboard from './components/keyboard/Keyboard'

// TODO:
// MVP
// - get answer based on date
// - feedback for invalid guess
// 2.0
// - animate letter input
// - LONGER WORDS for a true MMO challenge
//   * word get longer as the week goes on?
//   * one really long word for the whole week?

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
    <div className='pt-52 gap-4 h-screen flex flex-col items-center'>
      <p>{'You only get one guess >:)'}</p>
      <Row guess={guess} result={result} isSubmitted={isSubmitted} />
      <Keyboard addChar={addChar} delChar={delChar} submit={submit} />
      {isSubmitted && result && (
        <CopyResultsButton guess={guess} result={result} className='mt-4' />
      )}
    </div>
  )
}

export default App
