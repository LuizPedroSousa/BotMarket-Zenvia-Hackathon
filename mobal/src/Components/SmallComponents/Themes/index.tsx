import React, { useContext, useState } from 'react';
import { Switch } from 'react-native';
import CardContext from '../../../Utils/ContextApi/Card/context';
import Context from '../../../Utils/ContextApi/themes/context';
import { ThemeContext } from 'styled-components';
import * as animatable from 'react-native-animatable';
import {
  Container,
  Title,
  CardContainer,
  CardContent,
} from './styles';

const Themes: React.FC = () => {
  //Contexts
  const { viewCard } = useContext(CardContext);
  const { setTheme } = useContext(Context);
  const { colors, title } = useContext(ThemeContext)

  const Card: React.FC = () => {
    const CardContainerAnim = animatable.createAnimatableComponent(CardContainer);
    return (
      <CardContainerAnim
        useNativeDriver={true}
        animation={'zoomIn'}
        duration={3000}
      >
        <CardContent>
          <Title>
            Light
        </Title>
          <Switch
            thumbColor={colors.buttonText}
            tintColor={colors.pink}
            onTintColor={colors.green}
            value={title == 'light' ? true : false}
            onValueChange={setTheme}
          />
          <Title>
            Dark
        </Title>
          <Switch
            thumbColor={title == 'dark' ? colors.black : colors.buttonText}
            tintColor={colors.pink}
            onTintColor={colors.green}
            value={title == 'dark' ? true : false}
            onValueChange={setTheme}
          />
        </CardContent>
      </CardContainerAnim>
    );
  }
  return (
    <Container>

      {
        viewCard
        &&
        <Card />
      }
    </Container>
  );
};

export default Themes;
