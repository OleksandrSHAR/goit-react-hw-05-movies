import { Routes, Route } from 'react-router-dom';
import { Header } from './Header/Header';
// import { lazy } from 'react';
import { NotFound } from 'Pages/NotFound/NotFound';
import { Home } from 'Pages/Home/Home';
import { Movies } from 'Pages/Movie/Movie';
import { MovieDetails } from 'Pages/MovieDetails/MovieDetails';
import { MovieReviews } from 'Pages/MovieDetails/MovieReviews/MovieReviews';
import { MovieCast } from 'Pages/MovieDetails/MovieCast/MovieCast';
// const Home = lazy(() => import('../Pages/Home'));
// const Movies = lazy(() => import('../Pages/Movies'));
export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
