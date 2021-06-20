import React from 'react';
import Hero from '../../components/hero/hero.component';
import Section from '../../components/section/section.component';

import { homeObjOne, homeObjTwo } from '../../components/section/Data.js';

const Home = () => {
  return (
    <>
      <Hero />
      <Section {...homeObjOne} />
      {/* <Section {...homeObjTwo} /> */}
    </>
  );
};

export default Home;
