import React from 'react';
import { RiCloseCircleFill, RiCheckboxCircleFill } from 'react-icons/ri';

import {
  Container,
  Icon,
  AlertContent,
  AlertTitle,
  AlertText,
  Button,
  Decoration,
} from './alert.styles';

const Alert = ({ title, text, button, type }) => {
  const renderIcon = (type) => {
    switch (type) {
      case 'error':
        return <RiCloseCircleFill />;
      case 'success':
        return <RiCheckboxCircleFill />;
      default:
        return <RiCloseCircleFill />;
    }
  };

  return (
    <>
      <Container type={type}>
        <Icon>{renderIcon(type)} </Icon>
        <AlertContent>
          <AlertTitle>{title}</AlertTitle>
          <AlertText>{text}</AlertText>
          <Button type={type}>{button}</Button>
        </AlertContent>

        <Decoration />
      </Container>
    </>
  );
};

export default Alert;
