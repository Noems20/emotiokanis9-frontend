import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import { Grid, Container } from './sign-in-and-sign-up.styles';

const SignInAndSignUpPage = () => {
  return (
    <>
      <Grid>
        <Container>
          <SignIn />
          <SignUp />
        </Container>
      </Grid>
    </>
  );
};

export default SignInAndSignUpPage;
