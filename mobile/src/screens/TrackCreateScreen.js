import '../_mockLocation.js';
import React, { useContext } from 'react';
import {
  StyleSheet,
  Text
} from 'react-native';

import { Context as LocationContext } from '../providers/LocationProvider.js';
import useLocation from '../hooks/useLocation.js';

import { SafeAreaView } from 'react-native-safe-area-context';
import { Map } from '../components/map.js';

export const TrackCreateScreen = ({ navigation }) => {
  const { addLocation } = useContext(LocationContext);
  const [errorMsg] = useLocation(navigation.isFocused(), addLocation);

  return (
    <SafeAreaView forceIncet={{ top: 'always' }}>
      <Text style={styles.header}>Create Track</Text>
      {errorMsg ? <Text>Please enable location services</Text> : null}
      <Map />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: {
    fontSize: 50
  }
});