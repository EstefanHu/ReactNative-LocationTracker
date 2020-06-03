import React from 'react';
import { createStackNavigator } from '@react-native/stack';
import { SignupScreen } from '../screens/SignupScreen.js';
import { SigninScreen } from '../screens/SigninScreen.js';

const Stack = createStackNavigator();

export const AuthStack = () => (
  <Stack.Navigator>
    <Stack.Screen nam='Signup' component={SignupScreen} />
    <Stack.Screen nam='Signin' component={SigninScreen} />
  </Stack.Navigator>
)