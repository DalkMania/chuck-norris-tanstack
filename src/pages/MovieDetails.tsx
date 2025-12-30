import { getRouteApi } from '@tanstack/react-router'

export const MovieDetails = () => {
  const routeApi = getRouteApi('/chuck-movies/$id')
  const data = routeApi.useLoaderData()

  return <pre>{JSON.stringify(data, null, 2)}</pre>
}
