import { useEffect } from 'react'
import Row from './components/Row'
import useGameState from './hooks/useGameState'
import { MAX_LENGTH } from './lib/constants'

//TODO: LONGER WORDS for a true MMO challenge
// - word get longer as the week goes on?

function App() {
  const { guess, setGuess, result, isSubmitted, submit } = useGameState()
  // maybe there is no setGuess, and we just use 'guess' as the initial val
  // for a new useState called word, which looks like
  // [{ char, status }, { char, status }, ...]
  // and then I think we only need 'guess' and 'submit'

  // const [input, setInput] = useState(guess)

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown, true)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  // Event Handler needs to be self-sufficient because 'addEventListener' doesn't
  // live in the component lifecycle, so it can't read updated states, for instance

  function handleKeyDown(e: KeyboardEvent) {
    const { key } = e
    console.log(key)

    if (key === 'Backspace') {
      setGuess((prev) => {
        if (prev.length <= 0) return prev
        return prev.slice(0, -1)
      })
    }

    if (key === 'Enter') {
      submit()
    }

    if (key.length > 1) return
    setGuess((prev) => {
      if (prev.length >= MAX_LENGTH) return prev
      return prev + key.toUpperCase()
    })
  }

  return (
    <div className='py-6 gap-4 flex flex-col items-center'>
      <h1>Hello World(le)</h1>
      <Row guess={guess} result={result} isSubmitted={isSubmitted} />
      {!isSubmitted ? (
        <button onClick={submit}>Submit</button>
      ) : (
        <p>You've already played today</p>
      )}
    </div>
  )
}

export default App
