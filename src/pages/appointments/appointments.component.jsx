import React from 'react';

import {
  Grid,
  Sidebar,
  SidebarContainer,
  SidebarItem,
  SidebarText,
  Contact,
} from './appointments.styles';

import { BsFillCalendarFill, BsPeopleCircle } from 'react-icons/bs';
import { MdContactPhone } from 'react-icons/md';

const Appointments = () => {
  return (
    <>
      <Grid>
        <Sidebar>
          <SidebarContainer>
            <SidebarItem>
              <BsPeopleCircle />
              <SidebarText>Mis citas</SidebarText>
            </SidebarItem>
            <SidebarItem>
              <BsFillCalendarFill />
              <SidebarText>Agendar cita</SidebarText>
            </SidebarItem>
            <SidebarItem>
              <MdContactPhone />
              <SidebarText>Contacto</SidebarText>
            </SidebarItem>
          </SidebarContainer>
        </Sidebar>
        {/* <Contact /> */}
      </Grid>
    </>
  );
};

export default Appointments;
