import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import CreateChild from './pages/CreateChild';
import { Actions } from './context/ActionsContext';

const Stack = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <Actions>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="CreateChild" component={CreateChild} />
        </Stack.Navigator>
      </NavigationContainer>
    </Actions>
  );
};

export default Routes;
