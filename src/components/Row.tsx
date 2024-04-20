import { MAX_LENGTH, Result } from '../lib/constants'
import { CharSlot } from './CharSlot'

function Row({
  guess,
  result,
  isSubmitted,
}: {
  guess: string
  result: Result[] | null
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
  result: Result[] | null,
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
      formatted[i] = { char, variant: result![i] }
    }
  }

  return formatted.map(({ char, variant }, i) => (
    <CharSlot
      char={char}
      key={i}
      variant={variant}
      style={{ animationDelay: `${200 * i}ms` }}
    />
  ))
}

export default Row
