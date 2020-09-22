import React, { useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Pages/Login';
import Register from './Pages/Register';
import { AsyncStorage } from 'react-native';
import LandingNavigation from './Pages/Landing';
import { ThemeContext } from 'styled-components';
const Routers: React.FC = () => {
    const { colors, title } = useContext(ThemeContext);
    const Stack = createStackNavigator();
    const [token, setToken] = useState('3');
    useEffect(() => {
        const tokenAt = AsyncStorage.getItem('token');
        setToken(`${tokenAt}`);
    }, []);
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        border: 0,
                        backgroundColor: title == 'dark' ? colors.black : colors.inputBackground
                    },
                    headerTintColor: colors.purple,
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        fontSize: 22,
                        fontFamily: 'Poppins600'
                    },

                }}
                initialRouteName={token != "" ? "Home" : "Login"}
            >
                <Stack.Screen
                    name='Register'
                    component={Register}
                />
                <Stack.Screen
                    name='Login'
                    component={Login}
                />
                <Stack.Screen
                    options={{
                        headerShown: false,
                    }}
                    name='Home'
                    component={LandingNavigation}
                />
            </Stack.Navigator>
        </NavigationContainer >
    );
}

export default Routers;