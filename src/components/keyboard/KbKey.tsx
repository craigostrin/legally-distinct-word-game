import { cn } from '../../lib/utils'
import bsIcon from '../../assets/Ic_backspace.svg'

function KbKey({
  className,
  kbKey,
  onKeyPress,
}: {
  className?: string
  kbKey: string
  onKeyPress: (char: string) => void | (() => void)
}) {
  return (
    <div
      className={cn(
        'flex flex-col justify-center items-center h-10 min-w-8 rounded-sm bg-gray-open font-semibold drop-shadow',
        className
      )}
      onClick={() => {
        onKeyPress(kbKey)
      }}
    >
      {kbKey === 'bs' ? <BackspaceIcon /> : kbKey.toUpperCase()}
    </div>
  )
}

function BackspaceIcon() {
  return <img className='w-4 h-4 mr-1 inline' src={bsIcon} />
}

export default KbKey
