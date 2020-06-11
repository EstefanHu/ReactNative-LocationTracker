import '../_mockLocation.js';
import React, { useContext, useCallback } from 'react';
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
  const { state, addLocation } = useContext(LocationContext);
  const callback = useCallback(location => addLocation(location, state.recording), [state.recording])
  const [errorMsg] = useLocation(useIsFocused(), callback);

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