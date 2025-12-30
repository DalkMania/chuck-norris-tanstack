import { type ReactNode } from 'react'
import { cn } from '@/lib/utils'

type SectionProps = {
  children: ReactNode
  className?: string
} & React.ComponentProps<'section'>

export const Section = ({ children, className, ...props }: SectionProps) => {
  return (
    <section className={cn([`py-8 relative`, className])} {...props}>
      {children}
    </section>
  )
}
