import { cn } from '../lib/utils'

type ButtonProps = {
  className?: string
  children?: React.ReactNode
  onClick?: () => void
}

function Button({ className, children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'py-2 px-4 rounded-md shadow-md border-gray-open',
        className
      )}
    >
      {children}
    </button>
  )
}

export default Button
