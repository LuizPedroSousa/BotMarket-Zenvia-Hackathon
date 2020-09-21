import React, { useState } from 'react';
import { TextInputProps } from 'react-native';
import {
  InputBlock,
  Label,
  InputText,
} from './styles';

interface InputProps extends TextInputProps {
  label: string;
  styles: object;
}

const Input: React.FC<InputProps> = ({ label, styles, ...rest }) => {
  return (
    <InputBlock
    >
      <Label
        style={styles}
      >
        {label}
      </Label>
      <InputText
        {...rest}
      >

      </InputText>
    </InputBlock>
  );
};

export default Input;
