import React, { useContext } from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Container } from './styles';
import { ThemeContext } from 'styled-components';
import {
  AntDesign,
  FontAwesome,
  MaterialCommunityIcons,
  Feather,
  MaterialIcons,
} from '@expo/vector-icons';
import Stock from '../Stock';
import AlterStock from '../AlterStock';
import Setting from '../Setting';
const { Navigator, Screen } = createBottomTabNavigator();
const LandingNavigation: React.FC = () => {
  const { colors } = useContext(ThemeContext);
  return (
    <Navigator
      initialRouteName="Home"
      tabBarOptions={{
        tabStyle: {
          flexDirection: "column-reverse",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: 14,
        },
        labelStyle: {
          fontFamily: "Poppins600",
          fontSize: 14,
          marginBottom: 4,
        },
        activeTintColor: `${colors.purple}`,
      }}
    >
      <Screen
        name="Estoque"
        component={Stock}
        options={{
          tabBarIcon: ({ focused, size }) => {
            return (
              focused
                ?
                <FontAwesome
                  name="shopping-cart"
                  size={size}
                  color={colors.purple}
                />
                :
                <AntDesign
                  name="shoppingcart"
                  size={size}
                  color={colors.black}
                />
            );
          }
        }}
      />
      <Screen
        name="Alterar estoque"
        component={AlterStock}
        options={{
          tabBarIcon: ({ focused, size }) => {
            return (
              focused
                ?
                <MaterialCommunityIcons
                  name="bank"
                  size={size}
                  color={colors.purple}
                />
                :
                <MaterialCommunityIcons
                  name="bank-outline"
                  size={size}
                  color={colors.black}
                />
            );
          }
        }}
      />
      <Screen
        name="Configurações"
        component={Setting}
        options={{
          tabBarIcon: ({ focused, size }) => {
            return (
              focused
                ?
                <Feather
                  name="settings"
                  size={size}
                  color={colors.purple}
                />
                :
                <MaterialIcons
                  name="settings"
                  size={size}
                  color={colors.black}
                />
            );
          }
        }}
      />
    </Navigator>
  );
};

export default LandingNavigation;
