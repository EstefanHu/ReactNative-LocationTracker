import React, { useState, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './src/RootNavigation.js';

import { BottomTabNavigation } from './src/layout/BottomTabNavigation.js'
import { AuthStack } from './src/stacks/AuthStack.js';

import { Provider as AuthProvider, Context as AuthContext } from './src/providers/AuthProvider.js';

const App = () => {
  const { state } = useContext(AuthContext);

  return (
    <NavigationContainer ref={navigationRef}>
      {state.token ? <BottomTabNavigation /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  )
}