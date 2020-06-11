import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  Octicons,
  MaterialCommunityIcons,
  Ionicons
} from '@expo/vector-icons';

import { TrackCreateScreen } from '../screens/TrackCreateScreen.js';
import { AccountScreen } from '../screens/AccountScreen.js';

import { TrackStack } from '../stacks/TrackStack.js';

import { Context as TrackContext } from '../providers/TrackProvider.js';

const Tabs = createBottomTabNavigator();

export const BottomTabNavigation = () => {
  const { fetchTracks } = useContext(TrackContext);

  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ _, color, size }) => {
          if (route.name === 'Track') {
            return <Octicons name={'home'} size={size} color={color} />;
          } else if (route.name === 'Create') {
            return <MaterialCommunityIcons name={'library-shelves'} size={size} color={color} />
          } else if (route.name === 'Account') {
            return <Ionicons name={'md-person'} size={size} color={color} />
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
      backBehavior={"initialRoute"}
    >
      <Tabs.Screen name='Track' component={TrackStack} listeners={{ focus: fetchTracks }} />
      <Tabs.Screen name='Create' component={TrackCreateScreen} />
      <Tabs.Screen name='Account' component={AccountScreen} />
    </Tabs.Navigator>
  );
};