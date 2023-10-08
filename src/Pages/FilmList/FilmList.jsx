import { Link, useLocation } from 'react-router-dom';
import { FilmItem } from './FilmList.style';
export const FilmList = ({ movie, movQuery }) => {
  const location = useLocation();
  const defoltPoster =
    'https://1.bp.blogspot.com/-B6PlJJwEsy8/VHhWIUnOShI/AAAAAAAABoM/La-gR8X-b2w/s1600/oacPJDv4TS4.jpg';
  return (
    <>
      {movie.map(({ id, poster_path, original_title, name }) => {
        return (
          <FilmItem key={id}>
            <Link to={`/movies/${id}`} state={{ from: location, movQuery }}>
              <img
                width={300}
                height={450}
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w500${poster_path}`
                    : defoltPoster
                }
                alt="poster"
              />
              <p>{original_title ? original_title : name}</p>
            </Link>
          </FilmItem>
        );
      })}
    </>
  );
};
