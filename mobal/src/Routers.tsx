import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Pages/Login';
import Register from './Pages/Register';
import { AsyncStorage } from 'react-native';
import LandingNavigation from './Pages/Landing';
const Routers: React.FC = () => {
    const Stack = createStackNavigator();
    const [token, setToken] = useState('3');
    useEffect(() => {
        const tokenAt = AsyncStorage.getItem('token');
        setToken(`${tokenAt}`);
    }, []);
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={"Login"}
            >
                <Stack.Screen
                    options={{
                        headerTintColor: "333",
                        headerTitleAlign: "center"
                    }}
                    name="Register"
                    component={Register}
                />
                <Stack.Screen
                    options={{
                        headerTintColor: "333",
                        headerTitleAlign: "center"
                    }}
                    name="Login"
                    component={Login}
                />
                <Stack.Screen
                    options={{
                        headerTintColor: "333",
                        headerTitleAlign: "center"
                    }}
                    name="Home"
                    component={LandingNavigation}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routers;