import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainStackScreenNames from './MainStackScreenNames';
import Home from '../../../screens/Home/Home';

const MainStack = createStackNavigator();

const MainStackScreens = () => {
  return (
    <MainStack.Navigator
      initialRouteName={MainStackScreenNames.home}
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
      }}>
      <MainStack.Screen
        name={MainStackScreenNames.home}
        component={Home}
        options={{headerShown: false}}
      />
    </MainStack.Navigator>
  );
};

export default MainStackScreens;
