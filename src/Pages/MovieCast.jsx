import { getMovieCast } from 'components/Api';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

export const MovieCast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();
  const controller = useRef();

  const defoldImg =
    'https://3.bp.blogspot.com/-frBsrxuM79s/VHhWIxb0DDI/AAAAAAAABoQ/i8_SosshdiI/s1600/vVQWMD3yG9k.jpg';
  useEffect(() => {
    if (!movieId) {
      return;
    }
    async function getCast() {
      controller.current = new AbortController();
      try {
        const { cast } = await getMovieCast(movieId, controller);

        setCast(cast);
      } catch (error) {
        console.log(error);
      }
    }
    getCast();
  }, [movieId]);
  return (
    <>
      <ul>
        {cast &&
          cast.map(({ profile_path, original_name, character, id }) => (
            <li key={id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500${profile_path}`
                    : defoldImg
                }
                alt={original_name}
              />

              <p>Character:{character}</p>
            </li>
          ))}
      </ul>
    </>
  );
};
