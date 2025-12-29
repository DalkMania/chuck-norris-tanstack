import { MovieDetails } from '@/pages/MovieDetails'
import { createFileRoute } from '@tanstack/react-router'
import { TMDB } from 'tmdb-ts'

export const Route = createFileRoute('/chuck-movies/$id')({
  loader: async ({ params }) => {
    const tmdb = new TMDB(process.env.TMDB_API_KEY!)
    const movie = await tmdb.movies.details(Number(params.id))
    return movie
  },
  component: MovieDetails,
})
