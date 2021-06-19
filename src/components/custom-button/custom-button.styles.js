import styled, { css } from 'styled-components';

const primaryButtonStyles = css`
  color: #fff;
  background-color: var(--color-primary);

  &:hover {
    background-color: #fff;
    color: var(--color-primary);
    transition: all 0.2s ease-in-out;
  }
`;

const secondaryButtonStyles = css`
  color: var(--color-primary);
  background-color: #fff;

  &:hover {
    background-color: var(--color-primary);
    color: #fff;
    transition: all 0.2s ease-in-out;
  }
`;

const getButtonStyles = (props) => {
  //   if (props.isGoogleSignIn) {
  //     return googleSignInStyles;
  //   }

  return props.primary ? primaryButtonStyles : secondaryButtonStyles;
};

export const CustomButtonContainer = styled.button`
  font-family: 'Fredoka One', sans-serif;
  font-size: 2rem;
  text-decoration: none;
  padding: 1rem 2rem;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  ${getButtonStyles}
`;
