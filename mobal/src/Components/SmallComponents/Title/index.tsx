import React from 'react';
import { TextProps } from 'react-native';
import { TitleContent } from './styles';
import * as animatable from 'react-native-animatable';

const Title: React.FC<TextProps> = ({ children, ...rest }) => {
  const TitleAnim = animatable.createAnimatableComponent(TitleContent);
  return (
    <TitleAnim
      useNativeDriver={true}
      animation='bounceInLeft'
      duration={2000}
      {...rest}
    >
      {children}
    </TitleAnim>
  );
};

export default Title;
