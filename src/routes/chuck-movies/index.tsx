import { createFileRoute } from '@tanstack/react-router'
import { Movies } from '@/pages/Movies'
import { PersonMovieCast, TMDB } from 'tmdb-ts'
import { createServerFn } from '@tanstack/react-start'

const getRuntimeVar = createServerFn({ method: 'GET' }).handler(() => {
  return process.env.TMDB_API_KEY // notice `process.env` on the server, and no `VITE_` prefix
})

export const Route = createFileRoute('/chuck-movies/')({
  loader: async () => {
    const foo = await getRuntimeVar()
    const tmdb = new TMDB(foo!)
    const movies = await tmdb.people.movieCredits(51576)
    return movies.cast.sort(
      (a, b) => parseFloat(b.release_date) - parseFloat(a.release_date),
    ) as PersonMovieCast[]
  },
  component: Movies,
})
