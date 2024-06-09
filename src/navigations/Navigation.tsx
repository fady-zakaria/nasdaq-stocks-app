import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStackScreens from './stacks/MainStack/MainStack';

const Navigation = () => {

  return (
    <NavigationContainer>
      <MainStackScreens />
    </NavigationContainer>
  );
};

export default Navigation;
