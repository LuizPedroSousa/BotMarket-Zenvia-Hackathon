import React from 'react';
import { Header } from './styles';

const Heading: React.FC = ({children}) => {
  return (
    <Header>
      {children}
    </Header>
  );
};

export default Heading;
