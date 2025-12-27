import { ChuckNorriesApiResponse } from '@/types'
import { useQuery } from '@tanstack/react-query'

export const useChuckJoke = () => {
  useQuery({
    queryKey: ['random'],
    queryFn: async (): Promise<ChuckNorriesApiResponse> => {
      try {
        const response = await fetch('/api/get-random-joke')
        const data = await response.json()
        if (response.ok) {
          return data as ChuckNorriesApiResponse
        } else {
          return Promise.reject(new Error('Error'))
        }
      } catch (error) {
        return Promise.reject(error)
      }
    },
  })
}
