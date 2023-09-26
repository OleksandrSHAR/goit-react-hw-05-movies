import { NavLink, Outlet } from 'react-router-dom';
export const Header = () => {
  return (
    <>
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
