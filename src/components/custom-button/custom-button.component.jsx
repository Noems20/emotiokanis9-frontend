import React from 'react';
import { FcGoogle } from 'react-icons/fc';

import {
  CustomButtonContainer,
  ChildrenContainer,
  GoogleContainer,
} from './custom-button.styles';

const CustomButton = ({ children, isGoogleSignIn, ...props }) => {
  return (
    <CustomButtonContainer isGoogleSignIn={isGoogleSignIn} {...props}>
      {isGoogleSignIn
        ? [
            <GoogleContainer>
              <FcGoogle />
            </GoogleContainer>,

            <ChildrenContainer>{children}</ChildrenContainer>,
          ]
        : children}
    </CustomButtonContainer>
  );
};

export default CustomButton;
