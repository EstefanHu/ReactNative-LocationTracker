import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabNavigation } from './src/layout/BottomTabNavigation.js'
import { AuthStack } from './src/stacks/AuthStack.js';

function App() {
  const [user, setUser] = useState(true);

  return (
    <NavigationContainer>
      {/* {user ? <BottomTabNavigation /> : <AuthStack />} */}
      <BottomTabNavigation />
    </NavigationContainer>
  );
}

export default App;
