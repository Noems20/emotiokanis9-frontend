import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const MobileIcon = styled.div`
  display: none;
  position: absolute;

  @media screen and (max-width: 992px) {
    position: static;
    display: block;
    font-size: 5rem;
    color: #000;
    cursor: pointer;
  }
`;

export const Nav = styled.nav`
  background-color: #fff;
  background-size: cover;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-self: stretch;
  align-items: center;
  width: 100%;

  & > * {
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;
  }
  @media screen and (max-width: 992px) {
    justify-content: space-between;
    margin: 0 3rem;
  }
`;

export const NavMenu = styled.ul`
  list-style: none;
  @media screen and (max-width: 992px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  display: flex;
  align-self: stretch;
  align-items: center;
`;

export const NavLink = styled(LinkR)`
  color: #000;
  font-size: 1.7rem;
  text-decoration: none;
  padding: 0 2rem;
  transition: all 0.2s ease-in-out;

  display: flex;
  align-self: stretch;
  align-items: center;
  width: 100%;
  &:hover {
    background-color: var(--color-grey-light-1);
    color: var(--color-primary-light);
    transition: all 0.2s ease-in-out;
  }
`;

export const NavLogo = styled.h1``;
