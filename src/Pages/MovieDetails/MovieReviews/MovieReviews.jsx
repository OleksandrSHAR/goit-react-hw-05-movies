import { getMovieReviews } from 'components/Api/Api';
import { useEffect } from 'react';
import { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

export const MovieReviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();
  const controller = useRef();
  useEffect(() => {
    if (!movieId) {
      return;
    }
    async function getReviews() {
      controller.current = new AbortController();
      try {
        const { revie } = await getMovieReviews(movieId, controller);

        setReviews(revie);
      } catch (error) {
        console.log(error);
      }
    }
    getReviews();
  }, [movieId]);
  return (
    <>
      <ul>
        {reviews ? (
          reviews.map(({ author, id, content }) => (
            <li key={id}>
              <h2>Nick:{author}</h2>
              <p>{content}</p>
            </li>
          ))
        ) : (
          <p>There is no review of the movie😕</p>
        )}
      </ul>
    </>
  );
};
