import Game from '../game/game'
import { fullwidth as FW } from '../lib/unicode'
import { cn } from '../lib/utils'
import copyIcon from '../assets/copy-solid.svg'
import Button from './Button'

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
    <Button
      onClick={copy}
      className={cn('bg-green-result text-white', className)}
    >
      <CopyIcon /> Copy Result
    </Button>
  )
}

function CopyIcon() {
  return <img className='w-4 h-4 mr-1 inline' src={copyIcon} />
}

function spread(guess: string) {
  const fullwidth = guess.split('').map((c) => ` ${FW[c as keyof typeof FW]}`)
  fullwidth[1] += ' '
  return fullwidth.join('')
}

export default CopyResultsButton
