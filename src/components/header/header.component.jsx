import React from 'react';
import { FaBars } from 'react-icons/fa';

import {
  MobileIcon,
  Nav,
  NavContainer,
  NavMenu,
  NavItem,
  NavLogo,
  NavLink,
} from './header.styles';

const Header = () => {
  return (
    <Nav>
      <NavContainer>
        <NavMenu>
          <NavItem>
            <NavLink>INICIO</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>NOSOTROS</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>SERVICIOS</NavLink>
          </NavItem>
        </NavMenu>
        <NavLogo>LOGO</NavLogo>
        <MobileIcon>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLink>RECONOCIMIENTOS</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>GALERÍA</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>CONTACTO</NavLink>
          </NavItem>
        </NavMenu>
      </NavContainer>
    </Nav>
  );
};

export default Header;
