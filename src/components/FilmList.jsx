import { Link, useLocation } from 'react-router-dom';
export const FilmList = ({ movie, movQuery }) => {
  const location = useLocation();
  return (
    <>
      {movie.map(({ id, poster_path, original_title, name }) => {
        return (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location, movQuery }}>
              <img
                width={300}
                height={450}
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt="poster"
              />
              {original_title ? original_title : name}
            </Link>
          </li>
        );
      })}
    </>
  );
};
