import React from 'react';
import AppointmentCard from '../appointment-card/appointment-card.component';

import {
  Container,
  AppointmentsContainer,
  Title,
} from './user-appointments.styles';

const UserAppointments = () => {
  const containerVariants = {
    hidden: {
      y: '-100vh',
    },
    visible: {
      y: 0,
      transition: {
        ease: 'easeInOut',
        when: 'beforeChildren',
      },
    },
    exit: {
      y: '100vh',
    },
  };

  const childVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        ease: 'easeInOut',
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      x: '100vw',
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'tween',
        // stiffness: 500,
        duration: 1,
      },
    },
  };

  const titleVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,

      transition: {
        type: 'tween',
        // stiffness: 500,
        duration: 1,
      },
    },
  };

  return (
    <>
      <Container
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        <AppointmentsContainer variants={childVariants}>
          <Title variants={titleVariants}>Cita activa</Title>

          <AppointmentCard active key={1} variants={cardVariants} />

          <Title variants={titleVariants}>Citas anteriores</Title>
          <AppointmentCard key={2} variants={cardVariants} />
          <AppointmentCard key={3} variants={cardVariants} />
          <AppointmentCard key={4} variants={cardVariants} />
          <AppointmentCard key={5} variants={cardVariants} />
          <AppointmentCard key={6} variants={cardVariants} />
          <AppointmentCard key={7} variants={cardVariants} />
          <AppointmentCard key={8} variants={cardVariants} />
          <AppointmentCard key={9} variants={cardVariants} />
        </AppointmentsContainer>
      </Container>
    </>
  );
};

export default UserAppointments;
