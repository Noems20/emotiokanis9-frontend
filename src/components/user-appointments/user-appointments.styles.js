import styled from 'styled-components';
import tokens from '../../tokens';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  grid-column: center-start / center-end;
  border-radius: 5px;
  margin: 4rem 0;
  overflow: hidden;

  -webkit-box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.2);

  display: grid;
  justify-content: center;
  align-content: center;
  grid-template-columns: 0.95fr;
  grid-template-rows: 0.95fr;
`;

export const AppointmentsContainer = styled(motion.div)`
  /* background: red; */
  overflow: auto;
  overflow-x: hidden;
  padding-right: 3rem;
`;

export const Title = styled(motion.h1)`
  font-family: ${tokens.fontPrimary};
  font-weight: 300;
  font-size: 3rem;
  text-align: center;
`;
