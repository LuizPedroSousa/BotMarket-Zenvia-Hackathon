import React from 'react';
import { Text } from 'react-native';
import avatarIcon from '../../../assets/Images/avatarIcon.png';
import {
  StatusBar,
  Perfil,
  Status,
} from './styles';

const Header: React.FC = () => {
  return (
    <StatusBar>
      <Perfil
        source={avatarIcon}
      >
        <Status />
      </Perfil>
    </StatusBar>
  );
};

export default Header;
