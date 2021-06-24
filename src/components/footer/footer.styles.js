import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.div`
  background: linear-gradient(
    0deg,
    var(--color-primary-light) 0%,
    var(--color-primary) 100%
  );
  height: 40rem;

  @media screen and (max-width: 478px) {
    height: 45rem;
  }

  & .hero-waves {
    transform: rotate(180deg);
  }
`;

export const FooterWrapper = styled.div`
  height: 70%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
`;

export const FooterTitle = styled.h1`
  font-family: 'Fredoka One', sans-serif;
  font-size: 5rem;
  color: #fff;
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
  border-bottom: 0.1px solid #fff;
`;

export const LinksContainer = styled.ul`
  list-style: none;
  display: flex;
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;

  @media screen and (max-width: 992px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const FooterLinks = styled.li``;

export const FooterLink = styled(Link)`
  font-family: 'Fredoka One', sans-serif;
  font-size: 2rem;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;

  margin: 0 2rem;

  &:hover {
    border-bottom: 1px solid #fff;
  }
`;

export const SocialLinksContainer = styled.ul`
  list-style: none;
  display: flex;

  margin-bottom: 1.5rem;
`;

export const FooterSocialLinks = styled.li``;

export const FooterSocialLink = styled(Link)`
  font-size: 2rem;
  color: #fff;
  text-decoration: none;

  margin: 0 2rem;

  & svg {
    font-size: 3.5rem;
  }
`;

export const WebsiteRights = styled.p`
  text-align: center;
  font-size: 1.5rem;
  color: #fff;
`;