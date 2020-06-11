import React, { useContext } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import { Context as TrackContext } from '../providers/TrackProvider.js';
import MapView, { Polyline } from 'react-native-maps';

export const TrackDetailScreen = ({ route }) => {
  const { state } = useContext(TrackContext);
  const id = route.params?._id;

  const track = state.find(t => t._id === id);
  const initialCoords = track.locations[0].coords;

  return (
    <View style={styles.container}>
      <Text>{track.name}</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          longitudeDelta: .01,
          latitudeDelta: .01,
          ...initialCoords
        }}
      >
        <Polyline coordinates={track.locations.map(loc => loc.coords)} />
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  map: {
    height: 300,
  }
});