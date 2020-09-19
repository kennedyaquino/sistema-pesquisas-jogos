import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/home';
import CreateRecord from './pages/createRecords';
 
const Stack = createStackNavigator();


const Routes = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator 
                headerMode="none" 
                screenOptions={{
                    cardStyle: {
                        backgroundColor: '#0B1F34'
                    }}}>
                <Stack.Screen name="home" component={Home} />
                <Stack.Screen name="createdRecords" component={CreateRecord} />
            </Stack.Navigator>
        </NavigationContainer>
    )
        
};

export default Routes;