import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Home, CreateChild, EditChild } from './pages';

const Stack = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CreateChild" component={CreateChild} />
        <Stack.Screen name="EditChild" component={EditChild} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
