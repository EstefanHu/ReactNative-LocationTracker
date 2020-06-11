import React, { useContext } from 'react';
import {
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

import { Context as LocationContext } from '../providers/LocationProvider.js';

import MapView, { Polyline, Circle } from 'react-native-maps';

export const Map = () => {
  const { state: { currentLocation } } = useContext(LocationContext);

  if (!currentLocation) return <ActivityIndicator size='large' style={{ marginTop: 200 }} />;

  return <MapView
    showsUserLocation={true}
    style={styles.map}
    initialRegion={{
      ...currentLocation.coords,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    }}
  >
    <Circle 
      center={currentLocation.coords}
      radius={20}
      strokeColor='rgba(158,158,255,1.0)'
      fillColor='rgba(158,158,255,0.3)'
    />
  </MapView>
}

const styles = StyleSheet.create({
  map: {
    height: 300
  }
});