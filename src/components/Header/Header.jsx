import { NavLink, Outlet } from 'react-router-dom';
export const Header = () => {
  return (
    <>
      <NavLink to={'/'}>
        <img
          width="154"
          height="20"
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
          alt="logo"
        />
      </NavLink>
      <NavLink to={'/'} end>
        HOME
      </NavLink>
      <NavLink to={'/movies'}>MOVIES</NavLink>
      <div>
        <Outlet />
      </div>
    </>
  );
};
