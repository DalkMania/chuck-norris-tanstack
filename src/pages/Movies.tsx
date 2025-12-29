import { Container } from '@/components/layout/Container'
import { getRouteApi, Link } from '@tanstack/react-router'

export const Movies = () => {
  const routeApi = getRouteApi('/chuck-movies/')
  const movies = routeApi.useLoaderData()

  return (
    <Container className="py-12">
      <h2 className="font-extrabold text-4xl text-center text-shadow-lg/30 leading-12 pb-12">
        Chuck Movies
      </h2>
      {movies && movies.length > 0 && (
        <ul className="grid grid-cols-4 gap-8">
          {movies.map((movie) => {
            if (movie?.poster_path) {
              return (
                <li key={movie.id}>
                  <Link
                    to={`/chuck-movies/$id`}
                    params={{ id: String(movie.id) }}
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`}
                      alt={movie.title}
                      className="rounded-xl shadow-xl"
                    />
                  </Link>
                </li>
              )
            }
          })}
        </ul>
      )}
    </Container>
  )
}
