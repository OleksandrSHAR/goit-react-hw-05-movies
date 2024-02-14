import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const HeaderWrap = styled.div`
  display: flex;
  width: 1280px;
  gap: 100px;
  margin-bottom: 30px;
`;
export const PageWrap = styled.div`
  display: flex;
  gap: 20px;
`;
export const Wrap = styled.div`
  background: linear-gradient(to bottom, #ffffff, #2196f3, #ffc107, #ffffff);
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  align-items: center;
`;
export const Home = styled.div``;
export const Movies = styled.div``;
export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  padding-left: 5px;
  padding-right: 5px;
  color: black;

  &.active {
    background-color: #2196f3;
    border-radius: 10px;
  }
`;
