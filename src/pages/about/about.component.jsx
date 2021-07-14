import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { motion } from 'framer-motion';

import { selectCurrentAwards } from '../../redux/awards/awards.selectors';

import Aos from 'aos';
import 'aos/dist/aos.css';

import logo from './images/logo.svg';

import GalleryCard from '../../components/gallery-card/gallery-card.component';
import Modal from '../../components/modal/modal.component';

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

const About = ({ awards }) => {
  const [selectedImg, setSelectedImg] = useState(null);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

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
          <Logo src={logo} data-aos='fade-right' />
          <SectionText data-aos='fade-left'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda,
            iste veritatis repellat rem quidem tenetur culpa sint a tempore
            accusantium beatae nulla officia iure reprehenderit accusamus? Id
            aperiam officia voluptatem! Cupiditate quia fuga adipisci facilis,
            quaerat dicta commodi. Optio eos magnam rem, facere obcaecati
            cupiditate iste ducimus reprehenderit possimus ad temporibus omnis
          </SectionText>
        </SectionDescription>
        <SectionHeading>
          <SectionTitle data-aos='flip-right'>
            LA MISIÓN
            <br /> DE <span>EmotioKanis9</span>
          </SectionTitle>
        </SectionHeading>
        <SectionDescription>
          <SectionText data-aos='fade-right'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda,
            iste veritatis repellat rem quidem tenetur culpa sint a tempore
            accusantium beatae nulla officia iure reprehenderit accusamus? Id
            aperiam officia voluptatem! Cupiditate quia fuga adipisci facilis,
            quaerat dicta commodi. Optio eos magnam rem, facere obcaecati
            cupiditate iste ducimus reprehenderit possimus ad temporibus omnis
          </SectionText>
        </SectionDescription>
        <SectionHeading>
          <SectionTitle data-aos='flip-left'>
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
            {awards.map(({ id, ...otherCardProps }) => (
              <GalleryCard
                key={id}
                setSelectedImg={setSelectedImg}
                {...otherCardProps}
              />
            ))}
          </Masonry>
        </Gallery>
      </Grid>
      {selectedImg && (
        <Modal setSelectedImg={setSelectedImg}>
          <motion.img
            src={selectedImg}
            alt='Imagen agrandada'
            initial={{ y: '-100vh' }}
            animate={{ y: 0 }}
          />{' '}
        </Modal>
      )}
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  awards: selectCurrentAwards,
});

export default connect(mapStateToProps)(About);
