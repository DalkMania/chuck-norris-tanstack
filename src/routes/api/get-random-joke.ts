import { ChuckNorriesApiResponse } from '@/types'
import { createFileRoute } from '@tanstack/react-router'
import { RouteMethodResult } from '@tanstack/react-start'

export const Route = createFileRoute('/api/get-random-joke')({
  server: {
    handlers: {
      GET: async (): Promise<RouteMethodResult<ChuckNorriesApiResponse>> => {
        try {
          const response = await fetch(
            'https://api.chucknorris.io/jokes/random',
          )
          const data = await response.json()
          if (response.ok) {
            return Response.json(data)
          } else {
            return Promise.reject(new Error('error'))
          }
        } catch (error) {
          return Promise.reject(error)
        }
      },
    },
  },
})
