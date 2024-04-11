import { MAX_LENGTH } from '../lib/constants'
import { CharSlot } from './CharSlot'

function Row({
  guess,
  result,
  isSubmitted,
}: {
  guess: string
  result: string[]
  isSubmitted: boolean
}) {
  return (
    <div className='flex gap-1'>
      {renderGuess(guess, result, isSubmitted, MAX_LENGTH)}
    </div>
  )
}

function renderGuess(
  guess: string,
  result: string[],
  isSubmitted: boolean,
  maxLength = MAX_LENGTH
) {
  const formatted = Array(maxLength).fill({
    char: '',
    variant: 'open',
  })

  for (let i = 0; i < guess.length; i++) {
    const char = guess[i]

    if (!isSubmitted) {
      formatted[i] = { char, variant: 'input' }
    } else {
      formatted[i] = { char, variant: result[i] }
    }
  }

  return formatted.map(({ char, variant }, i) => (
    <CharSlot char={char} key={i} variant={variant} />
  ))
}

export default Row
