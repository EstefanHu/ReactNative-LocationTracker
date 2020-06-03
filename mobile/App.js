import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {AccountScreen} from './src/screens/AccountScreen.js';
import {TrackCreateScreen} from './src/screens/TrackCreateScreen.js';
import {TrackDetailScreen} from './src/screens/TrackDetailScreen.js';

import { AuthStack } from './src/stacks/AuthStack.js';

function App() {
  const [user, setUser] = useState(false);

  return (
    <NavigationContainer>
      {user ? null : <AuthStack />}
    </NavigationContainer>
  );
}

export default App;
