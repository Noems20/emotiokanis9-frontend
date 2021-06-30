import React from 'react';

import {
  CardContainer,
  CardImage,
  CardDescription,
  CardTitle,
  CardText,
} from './gallery-card.styles';

// import image from '../../pages/about/images/gallery/img1.jpg';

const GalleryCard = ({ title, description, url, alt }) => {
  return (
    <>
      <CardContainer>
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
