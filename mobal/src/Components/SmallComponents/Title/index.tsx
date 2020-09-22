import React from 'react';
import { TitleContent } from './styles';
import * as animatable from 'react-native-animatable';
const Title: React.FC = ({ children }) => {
  const TitleAnim = animatable.createAnimatableComponent(TitleContent);
  return (
    <TitleAnim
      useNativeDriver={true}
      animation='bounceInLeft'
      duration={2000}
    >
      {children}
    </TitleAnim>
  );
};

export default Title;
