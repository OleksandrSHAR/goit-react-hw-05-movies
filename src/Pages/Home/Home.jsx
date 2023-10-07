import { getTrendMovie } from 'components/Api/Api';
import { useEffect, useState } from 'react';
import { FilmList } from 'Pages/FilmList/FilmList';
import { FilmWrap } from './Home.style';

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
      <FilmWrap>{movie.length > 0 && <FilmList movie={movie} />}</FilmWrap>
    </div>
  );
};
export default Home;
