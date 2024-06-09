import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MainStackScreens from './stacks/MainStack/MainStack';

const Navigation = () => {
    const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <MainStackScreens />
    </NavigationContainer>
  );
};

export default Navigation;
