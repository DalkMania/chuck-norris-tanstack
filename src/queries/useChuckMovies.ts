import { useQuery } from '@tanstack/react-query'
import { PersonMovieCredit, PersonMovieCast } from 'tmdb-ts'

export const useChuckMovies = () =>
  useQuery({
    queryKey: ['movies'],
    refetchOnWindowFocus: false,
    staleTime: 10 * 60000,
    queryFn: async () => {
      const response = await fetch('/api/get-chuck-movies')
      const result = (await response.json()) as PersonMovieCredit
      return result.cast.sort(
        (a, b) => parseFloat(b.release_date) - parseFloat(a.release_date),
      ) as PersonMovieCast[]
    },
  })
