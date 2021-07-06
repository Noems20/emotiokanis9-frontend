import React, { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {
  SignUpTitle,
  SignUpSubtitle,
  Container,
  FormContainer,
  ButtonsContainer,
} from './sign-up.styles';

const SignUp = () => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <Container>
      <SignUpTitle>No tengo una cuenta</SignUpTitle>
      <SignUpSubtitle>Registrate con tu correo y contraseña.</SignUpSubtitle>
      <FormContainer>
        <FormInput
          name='displayName'
          type='text'
          handleChange={handleChange}
          value={displayName}
          label='Nombre'
          required
        />
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
        <FormInput
          name='confirmPassword'
          type='password'
          handleChange={handleChange}
          value={confirmPassword}
          label='Confirmar contraseña'
          required
        />
        <ButtonsContainer>
          <CustomButton primary>Crear cuenta</CustomButton>
        </ButtonsContainer>
      </FormContainer>
    </Container>
  );
};

export default SignUp;
