import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text
} from 'react-native';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';

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

      let location = await getCurrentPositionAsync({});
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