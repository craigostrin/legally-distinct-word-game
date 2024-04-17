import KbKey from './KbKey'

export interface KbRowProps {
  kbKeys: string[]
  addChar: (char: string) => void
}

function KbRow({ kbKeys, addChar }: KbRowProps) {
  return (
    <div className='flex gap-1'>
      {kbKeys.map((k) => (
        <KbKey key={k} kbKey={k} onKeyPress={addChar} />
      ))}
    </div>
  )
}

export default KbRow
