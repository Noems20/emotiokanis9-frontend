import styled from 'styled-components';

export const SectionContainer = styled.div`
  background-color: ${({ lightBg }) => (lightBg ? '#fff' : '#000')};
  height: 68rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 992px) {
    height: 90rem;
  }

  @media screen and (max-width: 478px) {
    height: 85rem;
  }
`;

export const SectionWrapper = styled.div`
  display: grid;
  width: 80%;
  justify-items: center;
`;

export const ContentWrapper = styled.div`
  display: grid;
  grid-auto-columns: 1fr 1fr;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};
  grid-gap: 7rem;
  align-items: center;

  @media screen and (max-width: 992px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
    width: 70%;
    grid-gap: 0;
  }
`;

export const ColumnOne = styled.div`
  grid-area: col1;

  &:last-child {
    text-align: center;
  }
`;

export const ColumnTwo = styled.div`
  grid-area: col2;
`;

export const Subtitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1.2rem;

  text-transform: uppercase;
  color: var(--color-primary);

  @media screen and (max-width: 1024px) {
    font-size: 1.5rem;
  }
`;

export const Heading = styled.h1`
  color: ${({ lightBg }) => (lightBg ? '#000' : '#fff')};
  font-size: 4.7rem;

  @media screen and (max-width: 1024px) {
    font-size: 4.4rem;
  }
`;

export const Description = styled.p`
  font-size: 2rem;
  color: ${({ lightBg }) => (lightBg ? '#000' : '#fff')};
  margin-top: 2rem;
  margin-bottom: 2rem;

  @media screen and (max-width: 1024px) {
    font-size: 1.7rem;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 590px;

  @media screen and (max-width: 992px) {
    margin-top: 2rem;
  }
`;
