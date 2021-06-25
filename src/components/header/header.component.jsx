import React, { useState, useEffect } from 'react';

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

export default Header;
