import { type ReactNode } from 'react'
import { cn } from '@/lib/utils'

type ContainerProps = {
  children: ReactNode
  className?: string
} & React.ComponentProps<'div'>

export const Container = ({
  children,
  className,
  ...props
}: ContainerProps) => {
  return (
    <div
      className={cn([`w-full max-w-7xl mx-auto px-5 relative`, className])}
      {...props}
    >
      {children}
    </div>
  )
}
