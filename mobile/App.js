import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabNavigation } from './src/layout/BottomTabNavigation.js'
import { AuthStack } from './src/stacks/AuthStack.js';

import { Provider as AuthProvider} from './src/providers/AuthProvider.js';

function App() {
  const [user, setUser] = useState(false);

  return (
    <NavigationContainer>
      {user ? <BottomTabNavigation /> : <AuthStack />}
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