import React from 'react';

import logo from './images/logo.svg';
import { images } from './gallery-data';

import GalleryCard from '../../components/gallery-card/gallery-card.component';

import Masonry from 'react-masonry-css';

import {
  Grid,
  SectionHeading,
  SectionTitle,
  SectionDescription,
  Logo,
  SectionText,
  Gallery,
} from './about.styles';

const About = () => {
  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <>
      <Grid>
        <SectionHeading>
          <SectionTitle>
            LA HISTORIA
            <br /> DE <span>EmotioKanis9</span>
          </SectionTitle>
        </SectionHeading>
        <SectionDescription>
          <Logo src={logo} />
          <SectionText>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda,
            iste veritatis repellat rem quidem tenetur culpa sint a tempore
            accusantium beatae nulla officia iure reprehenderit accusamus? Id
            aperiam officia voluptatem! Cupiditate quia fuga adipisci facilis,
            quaerat dicta commodi. Optio eos magnam rem, facere obcaecati
            cupiditate iste ducimus reprehenderit possimus ad temporibus omnis
          </SectionText>
        </SectionDescription>
        <SectionHeading>
          <SectionTitle>
            LA MISIÓN
            <br /> DE <span>EmotioKanis9</span>
          </SectionTitle>
        </SectionHeading>
        <SectionDescription>
          <SectionText>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda,
            iste veritatis repellat rem quidem tenetur culpa sint a tempore
            accusantium beatae nulla officia iure reprehenderit accusamus? Id
            aperiam officia voluptatem! Cupiditate quia fuga adipisci facilis,
            quaerat dicta commodi. Optio eos magnam rem, facere obcaecati
            cupiditate iste ducimus reprehenderit possimus ad temporibus omnis
          </SectionText>
        </SectionDescription>
        <SectionHeading>
          <SectionTitle>
            PREMIOS
            <br /> DE <span>EmotioKanis9</span>
          </SectionTitle>
        </SectionHeading>
        <Gallery>
          <Masonry
            breakpointCols={breakpoints}
            className='my-masonry-grid'
            columnClassName='my-masonry-grid_column'
          >
            {images.map(({ id, ...otherCardProps }) => (
              <GalleryCard key={id} {...otherCardProps} />
            ))}
          </Masonry>
        </Gallery>
      </Grid>
    </>
  );
};

export default About;
