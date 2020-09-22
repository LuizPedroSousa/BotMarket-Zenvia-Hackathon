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
  Poppins_600SemiBold,
  Poppins_700Bold,
  useFonts
} from '@expo-google-fonts/poppins';
import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold,
  Archivo_700Bold,
} from '@expo-google-fonts/archivo';
export default function App() {
  const [loaded] = useFonts({
    Poppins400: Poppins_400Regular,
    Poppins500: Poppins_500Medium,
    Poppins600: Poppins_600SemiBold,
    Poppins700: Poppins_700Bold,
    Archivo400: Archivo_400Regular,
    Archivo500: Archivo_500Medium,
    Archivo600: Archivo_600SemiBold,
    Archivo700: Archivo_700Bold,
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
                      style={theme.theme.title == 'dark' ? 'dark' : 'light'}
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