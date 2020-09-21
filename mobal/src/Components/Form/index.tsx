import React, { useContext, useEffect, useState } from 'react';
import { Text } from 'react-native';
import {
  Container,
  Button,
  ButtonName,
} from './styles';

import { ButtonProps } from 'react-native';
interface FormProps extends ButtonProps {
  buttonName: string;
  msg?: string;
}
const Form: React.FC<FormProps> = ({ buttonName, msg, children, ...rest }) => {
  return (
    <Container>
      <Text>
        {msg}
      </Text>
      {children}
      <Button
        {...rest}
      >
        <ButtonName>
          {buttonName}
        </ButtonName>
      </Button>
    </Container>
  );
};
export default Form;