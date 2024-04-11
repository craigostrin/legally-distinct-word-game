import Game from '../game/game'
import { fullwidth as FW } from '../lib/unicode'

interface CopyResultsButtonProps {
  guess: string
  result: string[]
}

function CopyResultsButton({ guess, result }: CopyResultsButtonProps) {
  const emojis = Game.result2emoji(result)
  const spreadGuess = spread(guess)

  function copy() {
    const text = `${spreadGuess}\n${emojis.join('')}`
    navigator.clipboard.writeText(text)
    alert(`Copied to clipboard:\n\n${text}`)
  }

  return (
    <button
      onClick={copy}
      className='bg-green-result text-white py-2 px-4 rounded-md shadow-md'
    >
      Copy Result
    </button>
  )
}

function spread(guess: string) {
  const fullwidth = guess.split('').map((c) => ` ${FW[c as keyof typeof FW]}`)
  fullwidth[1] += ' '
  return fullwidth.join('')
}

export default CopyResultsButton
