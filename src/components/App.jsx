import { Routes, Route } from 'react-router-dom';

import { lazy } from 'react';

const Header = lazy(() => import('./Header/Header'));
const NotFound = lazy(() => import('../Pages/NotFound/NotFound'));
const MovieReviews = lazy(() =>
  import('../Pages/MovieDetails/MovieReviews/MovieReviews')
);
const MovieCast = lazy(() =>
  import('../Pages/MovieDetails/MovieCast/MovieCast')
);
const Home = lazy(() => import('../Pages/Home/Home'));
const MovieDetails = lazy(() => import('../Pages/MovieDetails/MovieDetails'));
const Movies = lazy(() => import('../Pages/Movie/Movie'));
export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />

          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
