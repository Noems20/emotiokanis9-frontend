import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import {
  CardContainer,
  CardImage,
  CardDescription,
  CardTitle,
  CardText,
} from './gallery-card.styles';

// import image from '../../pages/about/images/gallery/img1.jpg';

const GalleryCard = ({ title, description, url, alt, setSelectedImg }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <CardContainer data-aos='zoom-in-up' onClick={() => setSelectedImg(url)}>
        <CardImage src={url} alt={alt} />
        <CardDescription>
          <CardTitle>{title.toUpperCase()}</CardTitle>
          <CardText>{description}</CardText>
        </CardDescription>
      </CardContainer>
    </>
  );
};

export default GalleryCard;
