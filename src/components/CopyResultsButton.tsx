import Game from '../game/game'
import { fullwidth as FW } from '../lib/unicode'
import { cn } from '../lib/utils'
import copyIcon from '../assets/copy-solid.svg'
import Button from './Button'
import { Result } from '../lib/constants'

const ERROR_MESSAGE =
  "Oops, something went wrong.\n\nPlease let the admin know what device and browser you're using so they can fix the bug <3"

interface CopyResultsButtonProps {
  className?: string
  guess: string
  result: Result[]
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
    try {
      // turns out, both of these work fine on mobile, as long as you're on HTTPS
      if (!!navigator.clipboard && !!navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
          alert(`Copied to clipboard:\n\n${text}`)
        })
        return
      }
      if (!!navigator.share && navigator.canShare({ text })) {
        navigator.share({ text })
        return
      }

      alert(ERROR_MESSAGE)
    } catch (_) {
      alert(ERROR_MESSAGE)
    }
  }

  return (
    <Button
      onClick={copy}
      className={cn(
        'bg-green-result active:bg-green-700 text-white',
        className
      )}
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
