import React from 'react';
import {
  CustomButtonContainer,
  ChildrenContainer,
} from './custom-button.styles';
import googleImg from './google.svg';

const CustomButton = ({ children, isGoogleSignIn, ...props }) => {
  return (
    <CustomButtonContainer isGoogleSignIn={isGoogleSignIn} {...props}>
      {isGoogleSignIn
        ? [
            <img src={googleImg} alt='Google logo' />,
            <ChildrenContainer>{children}</ChildrenContainer>,
          ]
        : children}
    </CustomButtonContainer>
  );
};

export default CustomButton;
