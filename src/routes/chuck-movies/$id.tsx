import { MovieDetails } from '@/pages/MovieDetails'
import { createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { TMDB } from 'tmdb-ts'

const getRuntimeVar = createServerFn({ method: 'GET' }).handler(() => {
  return process.env.TMDB_API_KEY // notice `process.env` on the server, and no `VITE_` prefix
})

export const Route = createFileRoute('/chuck-movies/$id')({
  loader: async ({ params }) => {
    const foo = await getRuntimeVar()
    const tmdb = new TMDB(foo!)
    const movie = await tmdb.movies.details(Number(params.id))
    return movie
  },
  component: MovieDetails,
})
