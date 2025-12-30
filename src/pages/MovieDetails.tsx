import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { timeConvert } from '@/lib/utils'
import { getRouteApi } from '@tanstack/react-router'
import { Image } from '@unpic/react'
import { User } from 'lucide-react'

export const MovieDetails = () => {
  const routeApi = getRouteApi('/chuck-movies/$id')
  const movie = routeApi.useLoaderData()

  const actors = movie.credits.cast.filter(
    (person) => person.known_for_department === 'Acting' && person.order < 9,
  )

  return (
    <>
      <Section
        className={`w-full overflow-hidden h-100 sm:h-135 bg-no-repeat bg-cover relative`}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${movie.backdrop_path})`,
        }}
      >
        <div className="absolute inset-0 bg-accent-foreground/80">
          <Container className="py-12 flex gap-8">
            <img
              src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`}
              alt={movie.title}
              className="rounded-xl shadow-xl hidden sm:block"
            />
            <div className="flex flex-col">
              <h2 className="font-extrabold text-4xl text-shadow-lg/30 leading-12">
                {movie.title} ({movie.release_date.substring(0, 4)})
              </h2>
              <ul className="flex gap-6 first:list-none">
                <li>
                  {new Intl.ListFormat('en', {
                    style: 'long',
                    type: 'conjunction',
                  }).format(movie.genres.map((genre) => genre.name))}
                </li>
                <li className="list-disc">{timeConvert(movie.runtime)}</li>
              </ul>
              <p className="mt-6 italic font-semibold text-lg leading-12">
                {movie.tagline}
              </p>
              <h2 className="font-extrabold text-2xl text-shadow-lg/30 leading-12 mt-4">
                Overview
              </h2>
              <p>{movie.overview}</p>
            </div>
          </Container>
        </div>
      </Section>
      <Section className="py-12">
        <Container>
          <h2 className="font-extrabold text-2xl text-shadow-lg/30 leading-12">
            Top Billed Cast
          </h2>
          <ul className="flex flex-wrap items-center justify-between gap-y-8">
            {actors.map((actor) => (
              <li key={actor.id} className="bg-white rounded-xl">
                <Card className="pt-0 flex flex-col shadow-none border-0">
                  <CardContent className="p-0 shadow-none border-0">
                    {actor?.profile_path?.length > 0 ? (
                      <Image
                        src={`https://image.tmdb.org/t/p/w276_and_h350_face${actor.profile_path}`}
                        alt={actor.name}
                        height={350}
                        width={276}
                        className="rounded-t-xl object-cover block"
                      />
                    ) : (
                      <div className="bg-gray-400 h-87.5 w-69 rounded-t-xl relative">
                        <User className="h-40 w-35 absolute left-[calc(50%-70px)] top-[calc(50%-80px)]" />
                      </div>
                    )}
                  </CardContent>
                  <CardHeader className="p-0 py-2 px-2 flex-1 shadow-none border-0">
                    <CardTitle className="text-sm">{actor.name}</CardTitle>
                    <CardDescription>{actor.character}</CardDescription>
                  </CardHeader>
                </Card>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  )
}
