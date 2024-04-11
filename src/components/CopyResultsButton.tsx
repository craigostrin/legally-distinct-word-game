import Game from '../game/game'
import { fullwidth as FW } from '../lib/unicode'
import { cn } from '../lib/utils'
import copyIcon from '../assets/copy-solid.svg'

interface CopyResultsButtonProps {
  className?: string
  guess: string
  result: string[]
}

function CopyResultsButton({
  className,
  guess,
  result,
}: CopyResultsButtonProps) {
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
      className={cn(
        'bg-green-result text-white py-2 px-4 rounded-md shadow-md',
        className
      )}
    >
      <img className='w-4 h-4 inline' src={copyIcon} /> Copy Result
    </button>
  )
}

function spread(guess: string) {
  const fullwidth = guess.split('').map((c) => ` ${FW[c as keyof typeof FW]}`)
  fullwidth[1] += ' '
  return fullwidth.join('')
}

export default CopyResultsButton
