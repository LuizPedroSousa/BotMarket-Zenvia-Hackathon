import React, { useState } from 'react';
import { TextInputProps } from 'react-native';

import {
  InputBlock,
  Label,
  InputText,
} from './styles';

interface InputProps extends TextInputProps {
  label: string;
}

const Input: React.FC<InputProps> = ({ label, ...rest }) => {
  return (
    <InputBlock>
      <Label>
        {label}
      </Label>
      <InputText {...rest}>

      </InputText>
    </InputBlock>
  );
};

export default Input;
