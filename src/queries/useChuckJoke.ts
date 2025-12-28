import { ChuckNorriesApiResponse } from '@/types'
import { useQuery } from '@tanstack/react-query'

export const useChuckJoke = () =>
  useQuery({
    queryKey: ['random'],
    queryFn: async () => {
      const response = await fetch('/api/get-random-joke')
      return (await response.json()) as ChuckNorriesApiResponse
    },
  })
