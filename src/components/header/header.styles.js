import styled, { css } from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const MobileIcon = styled.div`
  display: none;
  visibility: hidden;
  position: absolute;

  @media screen and (max-width: 992px) {
    position: static;
    visibility: visible;
    display: inline-block;
    color: var(--color-primary);
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    margin-left: auto;
    & svg {
      font-size: 3.5rem;
    }
  }
`;

export const Nav = styled.nav`
  background-color: ${({ scrollnav }) => (scrollnav ? '#fff' : 'transparent')};
  box-shadow: ${({ scrollnav }) =>
    scrollnav ? 'rgba(0, 0, 0, 0.24) 0px 3px 8px' : 'none'};
  background-size: cover;
  height: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  position: sticky;
  transition: all 0.15s ease-in-out;

  z-index: 10;

  @media screen and (max-width: 992px) {
    height: 5.7rem;
    transition: all 0.8s ease;
    background-color: #fff;
  }
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

    @media screen and (max-width: 992px) {
      padding: 0 3rem;
    }
  }
  @media screen and (max-width: 992px) {
    justify-content: space-between;
    width: 100%;
    flex-wrap: wrap;
  }
`;

const clickedNavMenu = css`
  @media screen and (max-width: 992px) {
    height: 45rem;
    background: #fff;
    display: flex;
    flex-direction: column;
    flex: 0 1 100%;
    box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.24);

    transition: all 0.5s ease;

    & li {
      flex: 0 1 100%;
      &:not(:last-child) {
        border-bottom: 0.1px solid var(--color-primary);
      }

      &:last-child {
        margin: 0.5rem auto;
      }
    }
  }
`;
const notClickedNavMenu = css`
  @media screen and (max-width: 992px) {
    display: none;
  }
`;

const getNavMenuStyles = ({ clicked }) => {
  return clicked ? clickedNavMenu : notClickedNavMenu;
};

export const NavMenu = styled.ul`
  ${getNavMenuStyles}
`;

export const NavItem = styled.li`
  display: flex;
  align-self: stretch;
  align-items: center;
`;

export const NavLink = styled(LinkR)`
  font-family: 'Fredoka One', sans-serif;
  color: var(--color-primary);
  text-transform: uppercase;
  font-size: 2.2rem;
  font-weight: 400;
  text-decoration: none;

  transition: all 0.15s ease-in-out;
  font-weight: 400;

  display: flex;
  align-self: stretch;
  align-items: center;
  width: 100%;

  &:hover {
    color: #000;
  }

  @media screen and (min-width: 992px) {
    font-size: 1.8rem;
    padding: 0 2rem;
    color: ${({ scrollnav }) => (scrollnav ? '#000' : '#fff')};
    text-align: center;
    &:hover {
      background-color: ${({ scrollnav }) =>
        scrollnav ? 'var(--color-grey-light-1)' : 'none'};
      color: ${({ scrollnav }) =>
        scrollnav ? 'var(--color-primary)' : 'black'};
      transition: all 0.2s ease-in-out;
    }
  }
`;

export const SessionBtn = styled(LinkR)`
  font-family: 'Fredoka One', sans-serif;
  text-decoration: none;
  color: #fff;
  background: var(--color-primary);
  border-radius: 100px;
  text-transform: uppercase;
  font-size: 2.2rem;
  font-weight: 400;

  padding: 0.8rem 2rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: var(--color-primary-light);
  }

  @media screen and (min-width: 992px) {
    font-size: 1.8rem;
    margin-left: 1.2rem;
    width: 100%;
    padding: 0.8rem 2rem;
    color: #fff;
    background: ${({ scrollnav }) =>
      scrollnav ? '#000' : 'var(--color-primary-light)'};
    &:hover {
      background-color: ${({ scrollnav }) =>
        scrollnav ? 'var(--color-primary)' : '#fff'};
      color: ${({ scrollnav }) =>
        scrollnav ? '#fff' : 'var(--color-primary-light)'};
      transition: all 0.2s ease-in-out;
    }
  }
`;

export const NavLogo = styled.img`
  margin-top: ${({ scrollnav }) => (scrollnav ? '0.75rem' : '8rem')};
  height: ${({ scrollnav }) => (scrollnav ? '100%' : '13rem')};
  transition: all 0.15s ease-in-out;

  @media screen and (max-width: 992px) {
    display: none;
    visibility: hidden;
    /* height: 100%;
    margin-top: 0.75rem; */
  }
`;

export const NavLetterLogo = styled.h1`
  font-family: 'Fredoka One', sans-serif;
  font-size: 4rem;
  color: var(--color-primary);

  @media screen and (min-width: 992px) {
    display: none;
    visibility: hidden;
  }
`;
