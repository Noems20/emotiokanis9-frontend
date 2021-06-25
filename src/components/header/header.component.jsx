import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import { RiMenu2Line } from 'react-icons/ri';
import { AiOutlineClose } from 'react-icons/ai';

import logoB from '../images/header/logoB.svg';
import logo from '../images/header/logo.svg';

import { HeaderItems } from './header.items';

import {
  MobileIcon,
  Nav,
  NavContainer,
  NavMenu,
  NavItem,
  NavLogo,
  NavLogoLink,
  NavLink,
  SessionBtn,
  NavLetterLogo,
} from './header.styles';

const Header = ({ history }) => {
  const [clicked, setClicked] = useState(false);
  const [scrollNav, setScrollNav] = useState();
  const [image, setImage] = useState();

  useEffect(() => {
    let listener = undefined;
    let currentLocation = history.location.pathname;
    // console.log(currentLocation);
    if (currentLocation === '/') {
      window.addEventListener('scroll', changeNav);
      listener = true;
      setImage(logoB);
    } else {
      setScrollNav(true);
      setImage(logo);
    }
    // console.log(currentLocation);
    history.listen((location) => {
      if (location.pathname === '/' && !listener) {
        window.addEventListener('scroll', changeNav);
        setScrollNav(false);
        setImage(logoB);
        listener = true;
        // console.log('Listener añadido');
      } else if (location.pathname !== '/') {
        window.removeEventListener('scroll', changeNav);
        listener = false;
        setScrollNav(true);
        setImage(logo);
      }
    });
  }, [history]);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
      setImage(logo);
    } else {
      setScrollNav(false);
      setImage(logoB);
    }
  };

  return (
    <Nav scrollnav={scrollNav ? 1 : 0}>
      <NavContainer>
        <NavLogoLink to='/'>
          <NavLogo src={image} scrollnav={scrollNav ? 1 : 0} />
        </NavLogoLink>
        <NavLetterLogo to='/'>K9</NavLetterLogo>
        <MobileIcon scrollnav={scrollNav ? 1 : 0} onClick={handleClick}>
          {clicked ? <AiOutlineClose /> : <RiMenu2Line />}
        </MobileIcon>
        <NavMenu clicked={clicked}>
          {HeaderItems.map((item, index) => {
            return (
              <NavItem key={index}>
                <NavLink to={item.url} scrollnav={scrollNav ? 1 : 0}>
                  {item.title}
                </NavLink>
              </NavItem>
            );
          })}
          <NavItem>
            <SessionBtn to='/login' scrollnav={scrollNav ? 1 : 0}>
              Iniciar sesión
            </SessionBtn>
          </NavItem>
        </NavMenu>
      </NavContainer>
    </Nav>
  );
};

export default withRouter(Header);
