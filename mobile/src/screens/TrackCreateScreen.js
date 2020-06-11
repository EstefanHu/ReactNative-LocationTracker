import '../_mockLocation.js';
import React, { useContext } from 'react';
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import { Context as LocationContext } from '../providers/LocationProvider.js';
import useLocation from '../hooks/useLocation.js';

import { SafeAreaView } from 'react-native-safe-area-context';
import { Map } from '../components/map.js';
import { TrackForm } from '../components/trackForm.js';

import { useIsFocused } from '@react-navigation/native';

export const TrackCreateScreen = () => {
  const { addLocation } = useContext(LocationContext);
  const [errorMsg] = useLocation(useIsFocused(), addLocation);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView forceIncet={{ top: 'always' }}>
        <Text style={styles.header}>Create Track</Text>
        {errorMsg ? <Text>Please enable location services</Text> : null}
        <Map />
        <TrackForm />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  header: {
    fontSize: 50
  }
});