// import '../_mockLocation.js';

import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text
} from 'react-native';
import {
  requestPermissionsAsync,
  watchPositionAsync,
  Accuracy
} from 'expo-location';

import { SafeAreaView } from 'react-native-safe-area-context';
import { Map } from '../components/map.js';

export const TrackCreateScreen = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }

      await watchPositionAsync({
        accuracy: Accuracy.BestForNavigation,
        timeInterval: 1000,
        distanceInterval: 10
      }, location => {
        console.log(location);
      });
      setLocation(location);
    })();
  });

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <SafeAreaView forceIncet={{ top: 'always' }}>
      <Text style={styles.header}>Create Track</Text>
      <Text>{text}</Text>
      <Map />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: {
    fontSize: 50
  }
});