import React, { useEffect, useState } from 'react';

import {
  HeroContainer,
  HeroBackground,
  HeroImage,
  HeroContent,
  HeroH1,
  HeroP,
  HeroButton,
} from './hero.styles';

import image from '../images/hero/hero6.jpg';

const Hero = () => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  return (
    <HeroContainer scrollnav={scrollNav}>
      <HeroBackground>
        <HeroImage src={image} alt='Fondo de perro' />
      </HeroBackground>
      <HeroContent>
        <HeroH1>Mascota Feliz Dueño Feliz</HeroH1>
        <HeroP>Con 15 años de experiencia</HeroP>
        <HeroP large={true}>
          ESCUELA CANINA DE APRENDIZAJE CONGNITIVO EMOCIONAL
        </HeroP>
        <HeroButton primary>Empieza ya</HeroButton>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
