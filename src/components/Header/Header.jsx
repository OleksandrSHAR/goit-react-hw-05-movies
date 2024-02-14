import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import {
  HeaderWrap,
  PageWrap,
  Wrap,
  StyledNavLink,
  Home,
  Movies,
} from './Header.style';
const Header = () => {
  return (
    <Wrap>
      <HeaderWrap>
        <NavLink to={'/'}>
          <img
            width="154"
            height="20"
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
            alt="logo"
          />
        </NavLink>
        <PageWrap>
          <StyledNavLink to={'/'} end>
            <Home>HOME</Home>
          </StyledNavLink>
          <StyledNavLink to={'/movies'}>
            <Movies>MOVIES</Movies>
          </StyledNavLink>
        </PageWrap>
      </HeaderWrap>
      <div>
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
    </Wrap>
  );
};
export default Header;
