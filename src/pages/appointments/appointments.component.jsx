import React, { useState } from 'react';
import { connect } from 'react-redux';
import { selectModalType } from '../../redux/modal/modal.selectors';
import { AnimatePresence } from 'framer-motion';

import ContactSection from '../../components/contact-section/contact-section.component';
import FormInput from '../../components/form-input/form-input.component';
import TextAreaInput from '../../components/text-area-input/text-area-input.component';
import UserAppointments from '../../components/user-appointments/user-appointments.component';
import Modal from '../../components/modal/modal.component';

import {
  Grid,
  Sidebar,
  SidebarContainer,
  SidebarItem,
  SidebarText,
  Button,
  EditForm,
} from './appointments.styles';

import { BsFillCalendarFill, BsPeopleCircle } from 'react-icons/bs';
import { MdContactPhone } from 'react-icons/md';
import { createStructuredSelector } from 'reselect';
import Alert from '../../components/alert/alert.component';

const Appointments = ({ modalType }) => {
  const [contactInfo, setContactInfo] = useState({
    subject: '',
    message: '',
  });

  const [tab, setTab] = useState();
  const { subject, message } = contactInfo;

  const renderSwitch = (tab) => {
    switch (tab) {
      case 'myAppointments':
        return <UserAppointments key={1} />;

      case 'makeAppointment':
        return <p key={2}>Hacer cita</p>;

      case 'contact':
        return (
          <ContactSection
            key={3}
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            exit={{ x: '100vw' }}
            transition={{ transition: { ease: 'easeInOut' } }}
          >
            <FormInput
              name='subject'
              type='text'
              handleChange={handleChange}
              value={subject}
              label='Asunto'
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
            <Button primary type='submit' onClick={handleSubmit}>
              Enviar
            </Button>
          </ContactSection>
        );
      default:
        return <UserAppointments key={1} />;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setContactInfo({
      subject: '',
      message: '',
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setContactInfo({ ...contactInfo, [name]: value });
  };

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };

  return (
    <>
      <Grid
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        <Sidebar>
          <SidebarContainer>
            <SidebarItem onClick={() => setTab('myAppointments')}>
              <BsPeopleCircle />
              <SidebarText>Mis citas</SidebarText>
            </SidebarItem>
            <SidebarItem onClick={() => setTab('makeAppointment')}>
              <BsFillCalendarFill />
              <SidebarText>Agendar cita</SidebarText>
            </SidebarItem>
            <SidebarItem onClick={() => setTab('contact')}>
              <MdContactPhone />
              <SidebarText>Contacto</SidebarText>
            </SidebarItem>
          </SidebarContainer>
        </Sidebar>

        <AnimatePresence exitBeforeEnter>{renderSwitch(tab)}</AnimatePresence>
      </Grid>

      {modalType === 'edit' && (
        <Modal>
          <Alert
            title='¡Error!'
            text='¿Estas seguro de que deseas cancelar tu cita?'
            button='Continuar'
            type='success'
          />
        </Modal>
      )}
      {modalType === 'delete' && (
        <Modal>
          <Alert
            title='¡Error!'
            text='¿Estas seguro de que deseas cancelar tu cita?'
            button='Continuar'
            type='error'
          />
        </Modal>
      )}
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  modalType: selectModalType,
});

export default connect(mapStateToProps)(Appointments);
