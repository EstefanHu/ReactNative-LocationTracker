import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TrackListScreen } from '../screens/TrackListScreen.js';
import { TrackDetailScreen } from '../screens/TrackDetailScreen.js';

const Stack = createStackNavigator();

export const AuthStack = () => (
  <Stack.Navigator>
    <Stack.Screen name='TrackList' component={TrackListScreen} />
    <Stack.Screen name='TrackDetail' component={TrackDetailScreen} />
  </Stack.Navigator>
)