import styled from 'styled-components';

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#010606')};
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 70rem;
  align-items: center;
  justify-items: center;

  @media screen and (max-width: 992px) {
    /* height: 100rem; */
  }
`;

export const InfoRow = styled.div`
  width: 80%;
  display: grid;
  /* grid-gap: 5rem; */
  /* grid-template-columns: 1fr 1fr; */
  grid-auto-columns: minimax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 992px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
    /* grid-gap: 0; */
  }
`;

export const Column1 = styled.div`
  grid-area: col1;
`;

export const Column2 = styled.div`
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 100%;
`;

export const TopLine = styled.p`
  color: var(--color-primary);
  font-size: 1.6rem;
  line-height: 1.6rem;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 1.6rem;
`;

export const Heading = styled.h1`
  margin-bottom: 2.4rem;
  font-size: 4.8rem;
  font-weight: 600;
  color: ${({ lightBg }) => (lightBg ? '#000' : '#fff')};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  margin-bottom: 35px;
  font-size: 2rem;
  line-height: 2.4rem;
  color: ${({ lightBg }) => (lightBg ? '#000' : '#fff')};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  /* display: flex;
  justify-content: center; */
`;

export const Img = styled.img`
  width: 100%;
  max-width: 555px;
`;
