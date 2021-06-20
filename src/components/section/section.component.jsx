import React from 'react';
import CustomButton from '../custom-button/custom-button.component';

import {
  SectionContainer,
  SectionWrapper,
  ContentWrapper,
  ColumnOne,
  ColumnTwo,
  Subtitle,
  Heading,
  Description,
  ImageWrapper,
  Image,
} from './section.styles';

const Section = ({
  img,
  lightBg,
  imgStart,
  alt,
  topLine,
  headline,
  description,
  buttonLabel,
}) => {
  return (
    <>
      <SectionContainer lightBg={lightBg}>
        <SectionWrapper>
          <ContentWrapper imgStart={imgStart}>
            <ColumnOne>
              <Subtitle>{topLine}</Subtitle>
              <Heading lightBg={lightBg}>{headline}</Heading>
              <Description lightBg={lightBg}>{description}</Description>
              <CustomButton primary>{buttonLabel}</CustomButton>
            </ColumnOne>
            <ColumnTwo>
              <ImageWrapper>
                <Image src={img} alt={alt} />
              </ImageWrapper>
            </ColumnTwo>
          </ContentWrapper>
        </SectionWrapper>
      </SectionContainer>
    </>
  );
};

export default Section;
