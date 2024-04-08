import { useState } from 'react'

function usePlayedToday() {
  const storage = localStorage.getItem('lastPlayed')
  let hasPlayedToday = false
  if (storage && isToday(new Date(storage))) hasPlayedToday = true

  const [hasPlayed, setState] = useState(hasPlayedToday)

  const played = () => {
    setState(true)
    localStorage.setItem('lastPlayed', new Date().toLocaleString())
  }

  return { hasPlayed, played }
}

function isToday(date: Date) {
  const today = new Date().setHours(0, 0, 0, 0)

  return today === date.setHours(0, 0, 0, 0)
}

export default usePlayedToday
