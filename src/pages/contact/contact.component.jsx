import React from 'react';

import { Grid, Heading, Title, MapContainer, MapTitle } from './contact.styles';
import ContactSection from '../../components/contact-section/contact-section.component';
// import GoogleMap from '../../components/map/map.component';

const Contact = () => {
  return (
    <>
      <Grid>
        <Heading>
          <Title>¿Tienes dudas?</Title>
        </Heading>
        <ContactSection />
        {/* <GoogleMap /> */}
        <MapContainer>
          <MapTitle>Ubícanos</MapTitle>
          <iframe
            title='Map'
            frameBorder='0'
            scrolling='no'
            src='https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=Copias%20No%C3%A9+(Mi%20nombre%20de%20egocios)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
          ></iframe>
        </MapContainer>
      </Grid>
    </>
  );
};

export default Contact;
