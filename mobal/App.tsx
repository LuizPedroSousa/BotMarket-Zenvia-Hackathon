import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import Routers from './src/Routers';
import Context from './src/Utils/ContextApi/themes/context';
import ThemeChangeProvider from './src/Utils/ContextApi/themes/provider';
import { AppLoading } from 'expo'
import {
  Poppins_400Regular,
  Poppins_500Medium,
  useFonts
} from '@expo-google-fonts/poppins';
export default function App() {
  const [loaded] = useFonts({
    Poppins400: Poppins_400Regular,
    Poppins500: Poppins_500Medium,
  });

  if (!loaded) {
    return (
      <AppLoading />
    );
  } else {

    return (
      <>
        <ThemeChangeProvider>
          <Context.Consumer>
            {
              theme => {
                return (
                  <ThemeProvider
                    theme={theme.theme}
                  >
                    <Routers />
                    <StatusBar
                      style={theme.theme.title == 'dark' ? 'light' : 'dark'}
                    />
                  </ThemeProvider>
                );
              }
            }
          </Context.Consumer>
        </ThemeChangeProvider>
      </>
    );
  }
}