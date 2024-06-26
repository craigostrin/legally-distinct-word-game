import Row from './components/Row'
import useGameState from './hooks/useGameState'
import { LETTER_REGEX, MAX_LENGTH } from './lib/constants'
import { useKeyDown } from './hooks/useKeyDown'
import CopyResultsButton from './components/CopyResultsButton'
import Keyboard from './components/keyboard/Keyboard'
import { useState } from 'react'

// TODO:
// 2.0
// - LONGER WORDS for a true MMO challenge
//   * word get longer as the week goes on?
//   * one really long word for the whole week?

function App() {
  const { guess, setGuess, result, isSubmitted, submit } = useGameState()
  const [animate, setAnimate] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  // DEV: FOR DEBUGGING
  // useKeyDown(() => localStorage.clear(), ['?'])

  useKeyDown(addChar, LETTER_REGEX)
  useKeyDown(delChar, ['Backspace'])
  useKeyDown(onSubmit, ['Enter'])

  function onSubmit() {
    const result = submit()
    if (typeof result === 'string') {
      setAnimate(true)
      setErrorMessage(result)
    }
  }

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

  return (
    <div className='pt-52 gap-4 h-screen flex flex-col items-center'>
      {errorMessage ? (
        <p
          className={`
          ${animate && 'animate-rotato'}
          text-red-600 font-semibold`}
          onAnimationEnd={() => {
            setAnimate(false)
            setTimeout(() => setErrorMessage(''), 1000)
          }}
        >
          {errorMessage}
        </p>
      ) : (
        <p className='font-semibold'>{'You only get one guess >:)'}</p>
      )}
      <Row guess={guess} result={result} isSubmitted={isSubmitted} />
      <Keyboard addChar={addChar} delChar={delChar} onSubmit={onSubmit} />
      {isSubmitted && result && (
        <CopyResultsButton guess={guess} result={result} className='mt-4' />
      )}
    </div>
  )
}

export default App
