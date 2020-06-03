import React, { useEffect, useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  Octicons,
  Fontisto,
  MaterialCommunityIcons,
  Ionicons
} from '@expo/vector-icons';
import { FeedContext } from '../providers/feedProvider';
import { LibraryContext } from '../providers/libraryProvider';
import { PortfolioContext } from '../providers/portfolioProvider';

import { HomeStack } from '../stacks/homeStack';
import { MapStack } from '../stacks/mapStack';
import { PathStack } from '../stacks/pathStack';
import { LibraryStack } from '../stacks/libraryStack';
import { ProfileStack } from '../stacks/profileStack';
import { CurrentContext } from '../providers/currentProvider';

const Tabs = createBottomTabNavigator();

export const AppTabs = () => {
  const { setFeed } = useContext(FeedContext);
  const { setLibrary } = useContext(LibraryContext);
  const { setPortfolio } = useContext(PortfolioContext);
  const { current } = useContext(CurrentContext);

  useEffect(() => {
    fetch('http://192.168.1.10:4000/mobile/base')
      .then(res => res.json())
      .then(res => {
        setFeed(res.feed);
        setLibrary(res.library);
        setPortfolio(res.portfolio);
      })
      .catch(console.error);
  }, []);

  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ _, color, size }) => {
          if (route.name === 'Home') {
            return <Octicons name={'home'} size={size} color={color} />;
          } else if (route.name === 'Map') {
            return <Fontisto name={'map'} size={size} color={color} />;
          } else if (route.name === 'Path') {
            if (current) return <MaterialCommunityIcons name={'triangle'} size={size} color={color} />
            return <MaterialCommunityIcons name={'triangle-outline'} size={size} color={color} />
          } else if (route.name === 'Library') {
            return <MaterialCommunityIcons name={'library-shelves'} size={size} color={color} />
          } else if (route.name === 'Profile') {
            return <Ionicons name={'md-person'} size={size} color={color} />
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tabs.Screen name='Home' component={HomeStack} />
      <Tabs.Screen name='Map' component={MapStack} />
      <Tabs.Screen name='Path' component={PathStack} />
      <Tabs.Screen name='Library' component={LibraryStack} />
      <Tabs.Screen name='Profile' component={ProfileStack} />
    </Tabs.Navigator>
  );
};