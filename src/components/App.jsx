import { Routes, Route } from 'react-router-dom';

import React from 'react';

const Header = React.lazy(() => import('./Header/Header'));
const NotFound = React.lazy(() => import('../Pages/NotFound/NotFound'));
const MovieReviews = React.lazy(() =>
  import('../Pages/MovieDetails/MovieReviews/MovieReviews')
);
const MovieCast = React.lazy(() =>
  import('../Pages/MovieDetails/MovieCast/MovieCast')
);
const Home = React.lazy(() => import('../Pages/Home/Home'));
const MovieDetails = React.lazy(() =>
  import('../Pages/MovieDetails/MovieDetails')
);
const Movies = React.lazy(() => import('../Pages/Movie/Movie'));
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
