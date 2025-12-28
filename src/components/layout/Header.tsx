import { useRef } from 'react'
import { Link } from '@tanstack/react-router'
import { Container } from '@/components/layout/Container'
import { useSticky } from '@/hooks/useSticky'
import { Navigation } from '../Navigation'

export const Header = () => {
  const headerRef = useRef(null)
  const { isSticky } = useSticky(headerRef, 0)
  const defaultClasses = 'py-4 border-transparent'
  const stickyClasses = 'py-3 border-black/40'

  return (
    <header
      id="masthead"
      className={`sticky top-0 z-50 w-full border-b bg-black/35 backdrop-blur supports-backdrop-filter:bg-black/35 ${
        !isSticky ? defaultClasses : stickyClasses
      }`}
      role="banner"
      ref={headerRef}
    >
      <Container>
        <nav
          className="header-navigation flex items-center justify-between"
          role="navigation"
        >
          <Link to="/">
            <h1 className="text-xl text-shadow-sm/30">Chuck Norris Jokes</h1>
          </Link>
          <Navigation />
        </nav>
      </Container>
    </header>
  )
}
