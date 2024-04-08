import { useState } from 'react'

const MAX_LENGTH = 5

// localStorage can only hold strings
// but for app state, we'll work with string[]s
function useGameState() {
  const lastPlayed = localStorage.getItem('lastPlayed')
  let hasPlayedToday = !!(lastPlayed && isToday(new Date(lastPlayed)))
  const lastGuess = localStorage.getItem('guess') || ''

  const init = hasPlayedToday ? lastGuess.split('') : []

  const [guess, setState] = useState(init)
  const [isSubmitted, setIsSubmitted] = useState(hasPlayedToday)

  const setGuess = (word: string[]) => {
    if (isSubmitted) return

    setState(word)
  }

  const submit = () => {
    if (guess.length < MAX_LENGTH || hasPlayedToday) return

    setIsSubmitted(true)
    localStorage.setItem('lastPlayed', new Date().toLocaleString())
    localStorage.setItem('guess', guess.join(''))
  }

  return { guess, setGuess, isSubmitted, submit }
}

function isToday(date: Date) {
  const today = new Date().setHours(0, 0, 0, 0)

  return today === date.setHours(0, 0, 0, 0)
}

export default useGameState
