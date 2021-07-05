import React from 'react';

import { Grid, Heading, Title } from './contact.styles';
import ContactSection from '../../components/contact-section/contact-section.component';

const Contact = () => {
  return (
    <>
      <Grid>
        <Heading>
          <Title>¿Tienes dudas?</Title>
        </Heading>
        <ContactSection />
      </Grid>
    </>
  );
};

export default Contact;
