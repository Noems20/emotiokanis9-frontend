import React, { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {
  SignInTitle,
  SignInSubtitle,
  Container,
  FormContainer,
  ButtonsContainer,
} from './sign-in.styles';

const SignIn = () => {
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
  });
  const { email, password } = userCredentials;
  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <Container>
      <SignInTitle>Ya tengo una cuenta</SignInTitle>
      <SignInSubtitle>Inicia sesión con tu correo y contraseña.</SignInSubtitle>
      <FormContainer>
        <FormInput
          name='email'
          type='text'
          handleChange={handleChange}
          value={email}
          label='Email'
          required
        />
        <FormInput
          name='password'
          type='password'
          handleChange={handleChange}
          value={password}
          label='Contraseña'
          required
        />
        <ButtonsContainer>
          <CustomButton primary>Iniciar Sesión</CustomButton>
          <CustomButton primary>Google</CustomButton>
        </ButtonsContainer>
      </FormContainer>
    </Container>
  );
};

export default SignIn;
