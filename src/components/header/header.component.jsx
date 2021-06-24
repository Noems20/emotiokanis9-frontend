import React, { useState, useEffect } from 'react';
import { RiMenu2Line } from 'react-icons/ri';
import { AiOutlineClose } from 'react-icons/ai';
import logoB from '../images/header/logoB.svg';
import logo from '../images/header/logo.svg';

import {
  MobileIcon,
  Nav,
  NavContainer,
  NavMenu,
  NavItem,
  NavLogo,
  NavLink,
  SessionBtn,
  NavLetterLogo,
} from './header.styles';

const Header = ({ scroll }) => {
  const [clicked, setClicked] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);
  const [image, setImage] = useState();

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

  useEffect(() => {
    setImage(logoB);
    if (scroll) {
      window.addEventListener('scroll', changeNav);
    } else {
      setScrollNav(true);
      setImage(logo);
    }
  }, [scroll]);

  return (
    <Nav scrollnav={scrollNav}>
      <NavContainer>
        <NavLogo src={image} scrollnav={scrollNav} />
        <NavLetterLogo>K9</NavLetterLogo>
        <MobileIcon scrollnav={scrollNav} onClick={handleClick}>
          {clicked ? <AiOutlineClose /> : <RiMenu2Line />}
        </MobileIcon>
        <NavMenu clicked={clicked}>
          <NavItem>
            <NavLink to='/' scrollnav={scrollNav}>
              INICIO
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to='/nosotros' scrollnav={scrollNav}>
              NOSOTROS
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to='/servicios' scrollnav={scrollNav}>
              SERVICIOS
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to='/contacto' scrollnav={scrollNav}>
              Contacto
            </NavLink>
          </NavItem>
          <NavItem>
            <SessionBtn to='/login' scrollnav={scrollNav}>
              Iniciar sesión
            </SessionBtn>
          </NavItem>
        </NavMenu>
      </NavContainer>
    </Nav>
  );
};

export default Header;
