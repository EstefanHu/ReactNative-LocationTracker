import React from 'react';
import {
  StyleSheet,
  Text
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { Map } from '../components/map.js';

export const TrackCreateScreen = () => {
  return (
    <SafeAreaView forceIncet={{ top: 'always' }}>
      <Text style={styles.header}>Create Track</Text>
      <Map />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: {
    fontSize: 50
  }
});