import { SetStateAction, useState } from 'react'
import { MAX_LENGTH } from '../lib/constants'
import Game from '../game/game'
import { isToday } from '../lib/utils'

const emptyInit: string[] = Array(MAX_LENGTH).fill('')

// localStorage can only hold strings
// but for app state, we'll work with string[]s
function useGameState() {
  const lastPlayed = localStorage.getItem('lastPlayed') || ''
  const lastGuess = localStorage.getItem('guess') || ''
  let hasPlayedToday = !!(lastPlayed && isToday(new Date(lastPlayed)))
  const initGuess = hasPlayedToday ? lastGuess : ''
  const initResult = hasPlayedToday
    ? Game.getResult(lastGuess, new Date(lastPlayed!))!
    : emptyInit

  const [guess, setState] = useState(initGuess)
  const [result, setResult] = useState(initResult)
  // const [isSubmitted, setIsSubmitted] = useState(hasPlayedToday)
  let isSubmitted = hasPlayedToday

  const setGuess = (callback: SetStateAction<string>) => {
    if (isSubmitted) return

    setState(callback)
  }

  const submit = () => {
    console.log('guess:', guess)
    if (guess.length < MAX_LENGTH || isSubmitted) return

    const result = Game.getResult(guess, new Date())
    if (!result) return

    setResult(result)
    isSubmitted = true
    localStorage.setItem('lastPlayed', new Date().toLocaleString())
    localStorage.setItem('guess', guess)
  }

  return { guess, setGuess, result, isSubmitted, submit }
}

export default useGameState
