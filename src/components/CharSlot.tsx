import { VariantProps, cva } from 'class-variance-authority'
import { cn } from '../lib/utils'
import React from 'react'

const charSlotVariants = cva(
  'border-2 border-black h-16 w-16 flex items-center justify-center',
  {
    variants: {
      variant: {
        green: 'animate-flip-green',
        yellow: 'animate-flip-yellow',
        gray: 'animate-flip-gray',
        input: 'text-black',
        open: 'border-gray-light text-black',
      },
    },
    defaultVariants: {
      variant: 'open',
    },
  }
)

export interface CharSlotProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof charSlotVariants> {
  char?: string
}

const CharSlot = React.forwardRef<HTMLDivElement, CharSlotProps>(
  ({ className, variant, char, ...props }, ref) => {
    return (
      <div
        className={cn(charSlotVariants({ variant, className }))}
        ref={ref}
        {...props}
      >
        <span className='m-auto text-3xl font-bold'>{char}</span>
      </div>
    )
  }
)

CharSlot.displayName = 'CharSlot'

export { CharSlot, charSlotVariants }
