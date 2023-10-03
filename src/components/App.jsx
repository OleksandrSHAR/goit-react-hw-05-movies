import { Routes, Route } from 'react-router-dom';
import { Header } from './Header';
// import { lazy } from 'react';
import { NotFound } from 'Pages/NotFound';
import { Home } from 'Pages/Home';
import { Movies } from 'Pages/Movies';
import { MoviesDetails } from 'Pages/MoviesDetails';
// const Home = lazy(() => import('../Pages/Home'));
// const Movies = lazy(() => import('../Pages/Movies'));
export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MoviesDetails />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
