import { useEffect } from 'react';
import { useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { getMovieDetails } from 'components/Api';
export const MoviesDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function getMovieInfo() {
      try {
        const moveData = await getMovieDetails(movieId);
        console.log(moveData);
        setMovie(moveData);
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
          <img
            width={300}
            height={450}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          />
          <h1>{movie.titel || movie.name}</h1>
          <div>
            <p>User Score:</p>
            <p>{movie.vote_average}</p>
          </div>

          <h2>Overview</h2>
          <p>{movie.overview}</p>

          <h2>Genres</h2>
          <p>{movie.genres}</p>
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
