import React from 'react';

import {
  Container,
  CardHeading,
  CardHeadingTitle,
  CardHeadingDate,
  CardIcons,
  CloseIcon,
  EditIcon,
  FinishedText,
  CardBody,
  CardBodyTitle,
  CardBodyDescription,
} from './appointment-card.styles';

const AppointmentCard = ({ key, variants, active }) => {
  return (
    <>
      <Container key={key} variants={variants}>
        <CardHeading>
          <CardHeadingTitle>Soy el titulo</CardHeadingTitle>
          <CardHeadingDate>
            Dia: 11/02/2000 <br /> Hora: 7:00pm
          </CardHeadingDate>
          <CardIcons>
            {active ? (
              [<EditIcon />, <CloseIcon />]
            ) : (
              <FinishedText>Finalizada</FinishedText>
            )}
          </CardIcons>
        </CardHeading>
        <CardBody>
          <CardBodyTitle>Descripción</CardBodyTitle>
          <CardBodyDescription>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
            quibusdam repellendus eum fugiat quia esse iure quaerat fugit
            impedit dolore, voluptatem, quae ad assumenda expedita sint unde ea
            a at.
          </CardBodyDescription>
        </CardBody>
      </Container>
    </>
  );
};

export default AppointmentCard;
