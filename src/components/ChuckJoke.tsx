import { Image } from '@unpic/react'
import { useChuckJoke } from '@/queries/useChuckJoke'
import { Container } from './layout/Container'
import ChuckImage from '@/assets/images/chuck-norris.jpg'

export const ChuckJoke = () => {
  const { data: joke, refetch, isLoading } = useChuckJoke()

  return (
    <Container className="grid h-full max-w-200">
      <div className="flex flex-col items-center gap-y-4 mt-20">
        <Image alt={`Chuck Norris`} src={ChuckImage} height={250} width={250} />
        <h2 className="font-extrabold text-4xl text-center text-shadow-lg/30 leading-12">
          {joke?.value}
        </h2>
      </div>
    </Container>
  )
}
