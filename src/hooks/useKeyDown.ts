import { useEffect } from 'react'

export const useKeyDown = (
  callback: (key: string) => void | (() => void),
  keys: string[] | RegExp
) => {
  const onKeyDown = (event: KeyboardEvent | React.KeyboardEvent) => {
    let wasKeyPressed = false

    if (Array.isArray(keys)) {
      wasKeyPressed = keys.some((key) => event.key === key)
    } else {
      wasKeyPressed = keys.test(event.key)
    }

    if (wasKeyPressed) {
      callback(event.key)
    }
  }
  useEffect(() => {
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [onKeyDown])
}

// Thank you Paulo!!!
// https://medium.com/@paulohfev/problem-solving-custom-react-hook-for-keydown-events-e68c8b0a371
