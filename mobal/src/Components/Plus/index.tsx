import React, { useContext } from 'react';
import { Text } from 'react-native';

import { Container } from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ThemeContext } from 'styled-components';
const Plus: React.FC = () => {
  const { colors } = useContext(ThemeContext);
  return (
    <Container>
      <MaterialCommunityIcons
        name="bank-plus"
        color={colors.purple}
        size={200}
      />
    </Container>
  );
};

export default Plus;
