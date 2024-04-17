import KbKey from './KbKey'
import KbRow from './KbRow'

const top = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']
const mid = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l']
const bot = ['z', 'x', 'c', 'v', 'b', 'n', 'm']

export interface KeyboardProps {
  addChar: (char: string) => void
  delChar: () => void
  submit: () => void
}

function Keyboard({ addChar, delChar, submit }: KeyboardProps) {
  return (
    <div className='flex flex-col gap-1 items-center'>
      <KbRow kbKeys={top} addChar={addChar} />
      <KbRow kbKeys={mid} addChar={addChar} />
      <div className='flex gap-1'>
        <KbRow kbKeys={bot} addChar={addChar} />
      </div>
      <div className='flex gap-1'>
        <KbKey
          kbKey='Enter'
          onKeyPress={submit}
          className='w-16 bg-gray-result text-white'
        />
        <KbKey kbKey='bs' onKeyPress={delChar} className='w-16' />
      </div>
    </div>
  )
}

export default Keyboard
