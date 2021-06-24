import React from 'react';

import Header from '../../components/header/header.component';
import Hero from '../../components/hero/hero.component';
import Section from '../../components/section/section.component';

import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from '../../components/section/Data.js';

const Home = () => {
  return (
    <>
      <Header scroll />
      <Hero />
      <Section {...homeObjOne} />
      <Section {...homeObjTwo} />
      <Section {...homeObjThree} />
    </>
  );
};

export default Home;
