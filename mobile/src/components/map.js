import React, { useState } from 'react';
import {
  Text,
  StyleSheet
} from 'react-native';
import MapView from 'react-native-maps';

export const Map = () => {
  const [region, setRegion] = useState({
    latitude: 37.33233,
    longitude: -122.03121,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const onRegionChange = region => setRegion(region);

  return <MapView
    style={styles.map}
    initialRegion={region}
    onRegionChange={onRegionChange}
  />
}

const styles = StyleSheet.create({
  map: {
    height: 300
  }
});