import { Routes, Route } from 'react-router-dom';
import { Header } from './Header';
// import { lazy } from 'react';
import { NotFound } from 'Pages/NotFound';
import { Movies } from 'Pages/Movies';
import { Home } from 'Pages/Home';
// const Home = lazy(() => import('../Pages/Home'));
// const Movies = lazy(() => import('../Pages/Movies'));
export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
