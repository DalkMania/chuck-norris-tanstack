import { Link } from '@tanstack/react-router'

export const Navigation = () => {
  return (
    <ul className="flex gap-x-8">
      <li>
        <Link to={`/chuck-movies`}>Chuck Movies</Link>
      </li>
      <li>
        <Link to={`/about`}>About</Link>
      </li>
    </ul>
  )
}
