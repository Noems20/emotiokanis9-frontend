import tokens from '../../tokens';

import { motion } from 'framer-motion';
import { AiOutlineClose, AiOutlineEdit } from 'react-icons/ai';
import styled from 'styled-components';

export const Container = styled(motion.div)`
  margin: 2rem 0;
  border-radius: 10px;

  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.3fr 0.7fr;
  justify-content: center;
`;

export const CardHeading = styled.div`
  margin: 2rem 2rem 0 2rem;
  padding-bottom: 2rem;
  border-bottom: 3px solid var(--color-primary);

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
`;
export const CardHeadingTitle = styled.h1`
  font-family: ${tokens.fontPrimary};
  font-weight: 300;
  text-transform: uppercase;
  color: var(--color-primary);

  justify-self: start;
`;
export const CardHeadingDate = styled.h2`
  letter-spacing: 2px;
  font-family: ${tokens.fontPrimary};
  font-weight: 300;
  text-align: center;
  color: #fff;

  padding: 0.5rem;
  border-radius: 10px;
  background-color: var(--color-primary);
`;

export const CardIcons = styled.div`
  justify-self: end;
  cursor: pointer;
`;

export const CloseIcon = styled(AiOutlineClose)`
  font-size: 5rem;
  fill: red;
  border-radius: 100%;

  transition: all 0.3s ease-in-out;

  &:hover {
    fill: #fff;
    padding: 1px;
    background-color: red;

    transition: all 0.3s ease-in-out;
  }
`;

export const EditIcon = styled(AiOutlineEdit)`
  font-size: 5rem;
  fill: var(--color-primary);
  border-radius: 100%;
  margin-right: 1rem;

  transition: all 0.3s ease-in-out;

  &:hover {
    fill: #fff;
    padding: 3px;
    background-color: var(--color-primary-light);

    transition: all 0.3s ease-in-out;
  }
`;

export const CardBody = styled.div`
  margin: 2rem;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  align-items: center;
`;

export const CardBodyTitle = styled.h1`
  font-family: ${tokens.fontPrimary};
  font-weight: 300;
  text-transform: uppercase;
  color: var(--color-primary);

  margin-bottom: 1rem;
`;
export const CardBodyDescription = styled.p`
  font-size: 1.6rem;
`;
