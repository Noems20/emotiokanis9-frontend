import styled from 'styled-components';
import tokens from '../../tokens';
import { motion } from 'framer-motion';
import CustomButton from '../custom-button/custom-button.component';

export const Container = styled(motion.div)`
  grid-column: center-start / center-end;
  border-radius: 5px;
  margin: 4rem 0;

  -webkit-box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.2);

  display: grid;
  justify-content: center;
  align-content: center;
  grid-template-columns: 0.95fr;
  grid-template-rows: 0.95fr;

  @media only screen and (max-width: 1200px) {
    max-height: 780px;
  }

  @media only screen and (max-width: 600px) {
    grid-column: full-start / full-end;
  }
`;

export const AppointmentsContainer = styled(motion.div)`
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }

  @media only screen and (max-width: 1200px) {
    margin: 2rem 0;
  }
`;

export const Title = styled(motion.h1)`
  font-family: ${tokens.fontPrimary};
  font-weight: 300;
  font-size: 3rem;
  text-align: center;
`;

export const NotAppointments = styled(motion.h2)`
  text-align: center;
  margin: 3rem 0;
  font-size: 2rem;
  color: var(--color-primary);
`;

export const Button = styled(CustomButton)`
  display: block;
  margin: 0 auto;
  margin-bottom: 2rem;
`;
