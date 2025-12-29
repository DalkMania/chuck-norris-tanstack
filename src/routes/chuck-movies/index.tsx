import { createFileRoute } from '@tanstack/react-router'
import { Movies } from '@/pages/Movies'
import { PersonMovieCast, TMDB } from 'tmdb-ts'

export const Route = createFileRoute('/chuck-movies/')({
  loader: async () => {
    const tmdb = new TMDB(process.env.TMDB_API_KEY!)
    const movies = await tmdb.people.movieCredits(51576)
    return movies.cast.sort(
      (a, b) => parseFloat(b.release_date) - parseFloat(a.release_date),
    ) as PersonMovieCast[]
  },
  component: Movies,
})
