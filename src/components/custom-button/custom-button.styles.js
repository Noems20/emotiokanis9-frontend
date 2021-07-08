import styled, { css } from 'styled-components';
import tokens from '../../tokens';

const primaryButtonStyles = css`
  color: #fff;
  background-color: var(--color-primary);
  border: 0.2px solid var(--color-primary);

  &:hover {
    border: 0.2px solid var(--color-primary);
    background-color: #fff;
    color: var(--color-primary);
    transition: all 0.2s ease-in-out;
  }
`;

const secondaryButtonStyles = css`
  border: none;
  color: var(--color-primary);
  background-color: #fff;

  &:hover {
    background-color: var(--color-primary);
    color: #fff;
    transition: all 0.2s ease-in-out;
  }
`;

const googleSignInStyles = css`
  background-color: #4285f4;
  color: white;
  border: 0.2px solid #4285f4;
  padding: 0;

  display: grid;
  grid-template-columns: min-content 1fr;
  grid-template-rows: 1px;
  align-content: center;
  align-items: center;
  justify-items: center;

  &:hover {
    border: 0.2px solid var(--color-primary);
    background-color: #fff;
    color: var(--color-primary);
    transition: all 0.2s ease-in-out;
  }

  & img {
    background-color: white;
    border-radius: 50%;
    padding: 3px;
    height: 100%;
  }
`;

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }

  return props.primary ? primaryButtonStyles : secondaryButtonStyles;
};

export const CustomButtonContainer = styled.button`
  font-family: ${tokens.fontPrimary};
  font-size: 2rem;
  text-decoration: none;
  padding: 1rem 2rem;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  @media screen and (min-width: 992px) {
    &:active {
      transform: translateY(2px);
    }
  }

  ${getButtonStyles}
`;

export const ChildrenContainer = styled.div`
  margin-left: -2rem;
`;
