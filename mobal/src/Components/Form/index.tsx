import React, { useContext, useEffect, useState } from 'react';
import {
  Container,
  Button,
  ButtonName,
} from './styles';

import { ButtonProps } from 'react-native';

interface FormProps extends ButtonProps {
  buttonName: string;
}
const Form: React.FC<FormProps> = ({ buttonName, children, ...rest }) => {
  return (
    <Container>
      {children}
      <Button
        {...rest}
      >
        <ButtonName>
        </ButtonName>
        <ButtonName>
          {buttonName}
        </ButtonName>
      </Button>
    </Container>
  );
};
export default Form;