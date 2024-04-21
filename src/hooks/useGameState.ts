import Game from '../game/game'
import { SetStateAction, useState } from 'react'
import { MAX_LENGTH } from '../lib/constants'
import { isToday } from '../lib/utils'

function useGameState() {
  const lastPlayed = localStorage.getItem('lastPlayed') || ''
  const lastGuess = localStorage.getItem('guess') || ''
  let hasPlayedToday = !!(lastPlayed && isToday(new Date(lastPlayed)))
  const initGuess = hasPlayedToday ? lastGuess : ''
  const initResult = hasPlayedToday
    ? Game.getResult(lastGuess, new Date(lastPlayed!))!
    : null

  const [guess, setState] = useState(initGuess)
  const [result, setResult] = useState(initResult)
  // const [isSubmitted, setIsSubmitted] = useState(hasPlayedToday)
  let isSubmitted = hasPlayedToday

  const setGuess = (callback: SetStateAction<string>) => {
    if (isSubmitted) return

    setState(callback)
  }

  const submit = () => {
    if (isSubmitted) return

    if (guess.length < MAX_LENGTH) return 'Oops'

    const result = Game.getResult(guess, new Date())
    if (!result) return 'Is that a real word?'

    setResult(result)
    isSubmitted = true
    localStorage.setItem('lastPlayed', new Date().toLocaleString())
    localStorage.setItem('guess', guess)
    return 0
  }

  return { guess, setGuess, result, isSubmitted, submit }
}

export default useGameState
