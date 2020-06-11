import React, { useState, useEffect, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { BottomTabNavigation } from './src/layout/BottomTabNavigation.js'
import { AuthStack } from './src/stacks/AuthStack.js';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as AuthProvider, Context as AuthContext } from './src/providers/AuthProvider.js';
import { Provider as LocationProvider } from './src/providers/LocationProvider.js';

const App = () => {
  const { state, tryLocalSignin } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async function authenticate() {
      await tryLocalSignin();
      setIsLoading(false);
    })();
  }, []);

  // Loading Screen
  if (isLoading) return null;

  return (
    <NavigationContainer>
      {state.token ? <BottomTabNavigation /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default () => {
  return (
    <SafeAreaProvider>
      <LocationProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </LocationProvider>
    </SafeAreaProvider>
  )
}