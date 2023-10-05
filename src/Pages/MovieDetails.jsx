import { useEffect } from 'react';
import { useState, useRef } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from 'components/Api';
export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const controller = useRef();
  const location = useLocation();
  const backLink = location.state?.from ?? '/movies';
  useEffect(() => {
    if (!movieId) return;
    if (controller.current) {
      controller.current.abort();
    }
    async function getMovieInfo() {
      controller.current = new AbortController();
      try {
        const { data } = await getMovieDetails(movieId, controller);

        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    }
    getMovieInfo();
  }, [movieId]);

  return (
    <>
      {movie && (
        <div>
          <Link to={backLink.current}>Beck</Link>
          <img
            width={300}
            height={450}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt="poster"
          />
          <h1>{movie.title || movie.name}</h1>
          <div>
            <p>User Score:</p>
            <p>{movie.vote_average}</p>
          </div>

          <h2>Overview</h2>
          <p>{movie.overview}</p>

          <h2>Genres</h2>
          {movie.genres.map(({ id, name }) => (
            <p key={id}>{name} </p>
          ))}
        </div>
      )}
      <ul>
        <li>
          <Link to={`/movies/${movieId}/cast`}>Cast</Link>
        </li>
        <li>
          <Link to={`/movies/${movieId}/reviews`}> Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};
