import React from 'react';
import { Grid } from './services.styles';

import Service from '../../components/service/service.component';

import { servicesData } from './services-data';

const Services = () => {
  return (
    <>
      <Grid>
        {servicesData.map(({ id, ...otherProps }) => (
          <Service key={id} {...otherProps}></Service>
        ))}
      </Grid>
    </>
  );
};

export default Services;
