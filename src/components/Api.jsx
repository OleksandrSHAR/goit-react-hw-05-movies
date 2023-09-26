import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '0faef55576804b8824855a6bbe4c2da0';

export const getTrendMovie = async controller => {
  const resp = await axios.get(`trending/all/day?api_key=${API_KEY}`, {
    signal: controller.curent.signal,
  });
  return resp.data;
};
export const getSearchMovie = async (searchMovie, controller) => {
  const resp = await axios.get(
    `/search/movie?api_key=${API_KEY}&query=${searchMovie}`,
    {
      signal: controller.curent.signal,
    }
  );
  return resp.data;
};
export const getMovieDetails = async (movieId, controller) => {
  const resp = await axios.get(`/movie/${movieId}?api_key=${API_KEY} `, {
    signal: controller.curent.signal,
  });
  return resp;
};
export const getMovieCredits = async (movieId, controller) => {
  const resp = await axios.get(
    `/movie/${movieId}/credits?api_key=${API_KEY} `,
    {
      signal: controller.curent.signal,
    }
  );
  return resp.data;
};
export const getMovieReviews = async (movieId, controller) => {
  const resp = await axios.get(
    `/movie/${movieId}/reviews?api_key=${API_KEY} `,
    {
      signal: controller.curent.signal,
    }
  );
  return resp.data;
};
