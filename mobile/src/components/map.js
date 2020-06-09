import React, { useState } from 'react';
import {
  Text,
  StyleSheet
} from 'react-native';
import MapView, { Polyline } from 'react-native-maps';

export const Map = () => {
  const [region, setRegion] = useState({
    latitude: 37.33233,
    longitude: -122.03121,
    latitudeDelta: 0.09,
    longitudeDelta: 0.04,
  });

  let points = [];
  for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) {
      points.push({
        latitude: 37.33233 + i * 0.001,
        longitude: -122.03121 + i * 0.001
      });
    } else {
      points.push({
        latitude: 37.33233 - i * 0.002,
        longitude: -122.03121 + i * 0.001
      });
    }
  }

  const onRegionChange = region => setRegion(region);

  return <MapView
    showsUserLocation={true}
    style={styles.map}
    initialRegion={region}
    onRegionChange={onRegionChange}
  >
    <Polyline coordinates={points} />
  </MapView>
}

const styles = StyleSheet.create({
  map: {
    height: 300
  }
});