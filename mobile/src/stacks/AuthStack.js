import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SignupScreen } from '../screens/SignupScreen.js';
import { SigninScreen } from '../screens/SigninScreen.js';

const Stack = createStackNavigator();

export const AuthStack = () => (
  <Stack.Navigator>
    <Stack.Screen name='Signup' component={SignupScreen} />
    <Stack.Screen name='Signin' component={SigninScreen} />
  </Stack.Navigator>
)