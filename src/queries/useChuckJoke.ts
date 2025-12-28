import { ChuckNorriesApiResponse } from '@/types'
import { useQuery } from '@tanstack/react-query'

export const useChuckJoke = () =>
  useQuery({
    queryKey: ['random'],
    refetchOnWindowFocus: false,
    staleTime: 10 * 60000,
    queryFn: async () => {
      const response = await fetch('/api/get-random-joke')
      return (await response.json()) as ChuckNorriesApiResponse
    },
  })
