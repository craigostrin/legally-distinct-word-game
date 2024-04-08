import { CharSlot } from './CharSlot'

function Row({
  guess,
  isSubmitted,
}: {
  guess: string[]
  isSubmitted: boolean
}) {
  // const chars = guess.split('')
  // guess might need to be
  // [{ char, status }, { char, status }, ...]
  return (
    <div className='flex gap-1'>
      {guess.map((c, i) => {
        return <CharSlot char={c} key={i} />
      })}
    </div>
  )
}

export default Row
