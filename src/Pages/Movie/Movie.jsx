import React, { useEffect, useState } from 'react';
import { getSearchMovie } from 'components/Api/Api';
import { useSearchParams } from 'react-router-dom';
import { FilmList } from 'Pages/FilmList/FilmList';
import { FilmWrap } from './Movie.style';
import toast from 'react-hot-toast';
const Movies = () => {
  const [input, setInput] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movQuery = searchParams.get('query') ?? '';
  useEffect(() => {
    const control = new AbortController();
    async function getSearch() {
      try {
        const searcMovies = await getSearchMovie(movQuery, control.signal);
        setMovies(searcMovies.results);
      } catch (error) {
        console.log(error);
      }
    }
    getSearch();
    return () => control.abort();
  }, [movQuery]);

  const onInput = ({ target }) => {
    setInput(target.value);
  };
  const onSubmit = e => {
    e.preventDefault();
    if (e.target.elements.search.value === '') {
      toast.error('Enter the name of the movie');
    }

    setSearchParams({ query: e.target.elements.search.value });

    console.log(e.target.elements.search.value);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={onInput}
          value={input}
          name="search"
          type="text"
          placeholder="Search film name"
        />
        <button type="submit">Submit</button>
      </form>

      <div>
        <FilmWrap>{movies.length > 0 && <FilmList movie={movies} />}</FilmWrap>
      </div>
    </div>
  );
};
export default Movies;
