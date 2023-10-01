import { useEffect, useState } from 'react';
import { getSearchMovie } from 'components/Api';
import { useSearchParams } from 'react-router-dom';
import { FilmList } from 'components/FilmList';
export const Movies = () => {
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
    // if (e.target.elements.search.value === '')
    // toast.error('The search field cannot be empty');
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
        <ul>
          {movies.length > 0 && <FilmList movie={movies} movQuery={movQuery} />}
        </ul>
      </div>
    </div>
  );
};
