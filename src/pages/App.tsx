import { getRouteApi, useRouter } from '@tanstack/react-router'
import { Image } from '@unpic/react'
import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/button'

import ChuckImage from '@/assets/images/chuck-norris.jpg'

export const App = () => {
  const routeApi = getRouteApi('/')
  const joke = routeApi.useLoaderData()
  const router = useRouter()

  return (
    <Container className="grid h-full max-w-200">
      <div className="flex flex-col items-center gap-y-4 my-20">
        <Image alt={`Chuck Norris`} src={ChuckImage} height={250} width={250} />
        <Button variant={`secondary`} onClick={() => router.invalidate()}>
          Refresh Joke
        </Button>
        <h2 className="font-extrabold text-4xl text-center text-shadow-lg/30 leading-12">
          {joke?.value}
        </h2>
      </div>
    </Container>
  )
}
