import { Routes, Route } from 'react-router-dom';
import { Header } from './Header';
// import { lazy } from 'react';
import { NotFound } from 'Pages/NotFound';
import { Home } from 'Pages/Home';
import { Movies } from 'Pages/Movie';
import { MovieDetails } from 'Pages/MovieDetails';
import { MovieReviews } from 'Pages/MovieReviews';
import { MovieCast } from 'Pages/MovieCast';
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
