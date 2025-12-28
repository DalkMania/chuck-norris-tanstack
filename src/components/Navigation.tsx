import { Link } from '@tanstack/react-router'

export const Navigation = () => {
  return (
    <ul className="flex gap-x-2">
      <li>
        <Link to={`/about`}>About</Link>
      </li>
    </ul>
  )
}
