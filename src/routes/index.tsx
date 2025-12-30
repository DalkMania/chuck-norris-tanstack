import { createFileRoute } from '@tanstack/react-router'
import { App } from '@/pages/App'
import { ChuckNorriesApiResponse } from '@/types'

export const Route = createFileRoute('/')({
  loader: async () => {
    const response = await fetch('https://api.chucknorris.io/jokes/random')
    return (await response.json()) as ChuckNorriesApiResponse
  },
  component: App,
})
