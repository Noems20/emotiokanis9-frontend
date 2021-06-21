import React, { useState, useEffect } from 'react';
import { RiMenu2Line } from 'react-icons/ri';
import { AiOutlineClose } from 'react-icons/ai';
import logoB from '../images/header/logoB.svg';
import logo from '../images/header/logo.svg';
// import logoN from '../images/header/logoN.svg';

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

const Header = () => {
  const [scrollNav, setScrollNav] = useState(false);
  const [image, setImage] = useState();
  const [clicked, setClicked] = useState(false);

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
    window.addEventListener('scroll', changeNav);
  }, []);

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
            <NavLink scrollnav={scrollNav}>INICIO</NavLink>
          </NavItem>
          <NavItem>
            <NavLink scrollnav={scrollNav}>NOSOTROS</NavLink>
          </NavItem>
          <NavItem>
            <NavLink scrollnav={scrollNav}>SERVICIOS</NavLink>
          </NavItem>
          <NavItem>
            <NavLink scrollnav={scrollNav}>Contacto</NavLink>
          </NavItem>
          <NavItem>
            <SessionBtn scrollnav={scrollNav}>Iniciar sesión</SessionBtn>
          </NavItem>
        </NavMenu>
      </NavContainer>
    </Nav>
  );
};

export default Header;
