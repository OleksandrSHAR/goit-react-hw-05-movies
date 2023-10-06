import { getTrendMovie } from 'components/Api/Api';
import { useEffect, useState } from 'react';
import { FilmList } from 'Pages/FilmList/FilmList';

const Home = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    const control = new AbortController();
    async function getHotMovie() {
      try {
        const movieData = await getTrendMovie(control.signal);
        setMovie([...movieData.results]);
      } catch (error) {
        console.log(error);
      }
    }
    getHotMovie();
  }, []);
  return (
    <div>
      <h1>The hottest for today🔥:</h1>
      <ul>{movie.length > 0 && <FilmList movie={movie} />}</ul>
    </div>
  );
};
export default Home;
