import React, { useState } from 'react';
import {
  View,
  Text
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {AccountScreen} from './src/screens/AccountScreen.js';
import {SigninScreen} from './src/screens/SigninScreen.js';
import {SignupScreen} from './src/screens/SignupScreen.js';
import {TrackCreateScreen} from './src/screens/TrackCreateScreen.js';
import {TrackDetailScreen} from './src/screens/TrackDetailScreen.js';

const Stack = createStackNavigator();

function App() {
  const [user, setUser] = useState('')

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Account" component={AccountScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
