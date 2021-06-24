import React from 'react';
import './waves.css';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

import {
  FooterContainer,
  FooterWrapper,
  FooterTitle,
  LinksContainer,
  FooterLinks,
  FooterLink,
  SocialLinksContainer,
  FooterSocialLinks,
  FooterSocialLink,
  WebsiteRights,
} from './footer.styles';

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <svg
          className='hero-waves'
          xmlns='http://www.w3.org/2000/svg'
          xlink='http://www.w3.org/1999/xlink'
          viewBox='0 24 150 28 '
          preserveAspectRatio='none'
        >
          <defs>
            <path
              id='wave-path'
              d='M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z'
            />
          </defs>
          <g className='wave1'>
            <use href='#wave-path' x='50' y='3' fill='rgba(255,255,255, .1)' />
          </g>
          <g className='wave2'>
            <use href='#wave-path' x='50' y='0' fill='rgba(255,255,255, .2)' />
          </g>
          <g className='wave3'>
            <use href='#wave-path' x='50' y='9' fill='#fff' />
          </g>
        </svg>
        <FooterWrapper>
          <FooterTitle>EmotioKanis9</FooterTitle>
          <LinksContainer>
            <FooterLinks>
              <FooterLink>Inicio</FooterLink>
            </FooterLinks>
            <FooterLinks>
              <FooterLink>Nosotros</FooterLink>
            </FooterLinks>
            <FooterLinks>
              <FooterLink>Servicios</FooterLink>
            </FooterLinks>
            <FooterLinks>
              <FooterLink>Contacto</FooterLink>
            </FooterLinks>
            <FooterLinks>
              <FooterLink>Iniciar sesión</FooterLink>{' '}
            </FooterLinks>
          </LinksContainer>
          <SocialLinksContainer>
            <FooterSocialLinks>
              <FooterSocialLink>
                <FaFacebook />
              </FooterSocialLink>
              <FooterSocialLink>
                <FaInstagram />
              </FooterSocialLink>
              <FooterSocialLink>
                <FaTwitter />
              </FooterSocialLink>
              <FooterSocialLink>
                <FaYoutube />
              </FooterSocialLink>
            </FooterSocialLinks>
          </SocialLinksContainer>
          <WebsiteRights>
            EmotioKanis9 &copy; {new Date().getFullYear()} Todos los derechos
            reservados.
          </WebsiteRights>
        </FooterWrapper>
      </FooterContainer>
    </>
  );
};

export default Footer;
