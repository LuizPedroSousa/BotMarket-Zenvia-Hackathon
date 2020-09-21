import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Landing from './Pages/Landing';
import Login from './Pages/Login';
const Routers: React.FC = () => {
    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="login"
                    component={Login}
                />
                <Stack.Screen
                    name="landing"
                    component={Landing}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routers;