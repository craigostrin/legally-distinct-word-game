//TODO: LONGER WORDS for a true MMO challenge
// - word get longer as the week goes on?

// localStorage:
//    lastPlayed: "dd mm yyyy"
//    guess: ""

import Row from './components/Row'
import useGameState from './hooks/useGameState'

function App() {
  const { guess, setGuess, isSubmitted, submit } = useGameState()
  // maybe there is no setGuess, and we just use 'guess' as the initial val
  // for a new useState called word, which looks like
  // [{ char, status }, { char, status }, ...]
  // and then I think we only need 'guess' and 'submit'

  return (
    <div className='py-6 gap-4 flex flex-col items-center'>
      <h1>Hello World(le)</h1>
      <p>{isSubmitted && "You've already played today"}</p>
      <Row guess={guess} isSubmitted={isSubmitted} />
      <button
        onClick={() => {
          setGuess(['G', 'U', 'E', 'S', 'S'])
        }}
      >
        Play
      </button>
      <button onClick={submit}>Submit</button>
    </div>
  )
}

export default App
