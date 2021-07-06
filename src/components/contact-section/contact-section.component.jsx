import React, { useState } from 'react';
import { MdLocationOn, MdPhoneInTalk, MdMail } from 'react-icons/md';
import { BiWorld } from 'react-icons/bi';

import FormInput from '../form-input/form-input.component';
import TextAreaInput from '../text-area-input/text-area-input.component';

import {
  ContactContainer,
  ContactInfoContainer,
  InfoContainerTitle,
  InfoContainer,
  Info,
  InfoImgContainer,
  InfoText,
  ContactFormContainer,
  ContactFormTitle,
  ContactForm,
  Button,
} from './contact-section.styles';

const ContactSection = () => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    lastname: '',
    email: '',
    message: '',
  });
  const { displayName, lastname, email, message } = userCredentials;
  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };
  return (
    <>
      <ContactContainer>
        <ContactInfoContainer>
          <InfoContainer>
            <InfoContainerTitle>Información</InfoContainerTitle>
            <Info>
              <InfoImgContainer>
                <MdLocationOn />
              </InfoImgContainer>
              <InfoText>
                Address: 198 West 21th Street, Suite 721 New York NY 10016
              </InfoText>
              <InfoImgContainer>
                <MdPhoneInTalk />
              </InfoImgContainer>
              <InfoText>
                Teléfono:
                <br /> +52 (492) 123 4567
              </InfoText>
              <InfoImgContainer>
                <MdMail />
              </InfoImgContainer>
              <InfoText>
                Email: <br />
                contacto@emotio.com
              </InfoText>
              <InfoImgContainer>
                <BiWorld />
              </InfoImgContainer>
              <InfoText>
                Sitio web: <br />
                emotiokanis9.com
              </InfoText>
              {/* <InfoImgContainer>
                <FaFacebook />
              </InfoImgContainer>
              <InfoText>
                Address: 198 West 21th Street, Suite 721 New York NY 10016
              </InfoText> */}
            </Info>
          </InfoContainer>
        </ContactInfoContainer>
        <ContactFormContainer>
          <ContactFormTitle> Contáctanos</ContactFormTitle>
          <ContactForm>
            <FormInput
              name='displayName'
              type='text'
              handleChange={handleChange}
              value={displayName}
              label='Nombre'
              required
            />
            <FormInput
              name='lastname'
              type='text'
              handleChange={handleChange}
              value={lastname}
              label='Apellidos'
              required
            />
            <FormInput
              name='email'
              type='email'
              handleChange={handleChange}
              value={email}
              label='Email'
              required
            />
            <TextAreaInput
              name='message'
              type='text'
              handleChange={handleChange}
              value={message}
              label='Mensaje'
              rows='1'
              required
            />
            <Button primary>Enviar mail</Button>
          </ContactForm>
        </ContactFormContainer>
      </ContactContainer>
    </>
  );
};

export default ContactSection;
