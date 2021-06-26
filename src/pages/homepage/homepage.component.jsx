import React from 'react';

import Hero from '../../components/hero/hero.component';
import Section from '../../components/section/section.component';

import { homeObjOne, homeObjTwo, homeObjThree } from './home-data.js';

const Home = () => {
  return (
    <>
      <Hero />
      <Section {...homeObjOne} />
      <Section {...homeObjTwo} />
      <Section {...homeObjThree} />
    </>
  );
};

export default Home;
