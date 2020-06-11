import React, { useContext } from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  View
} from 'react-native';
import { Context as TrackContext } from '../providers/TrackProvider.js';

export const TrackListScreen = ({ navigation }) => {
  const { state } = useContext(TrackContext);
  console.log(state);

  return (
    <FlatList
      data={state}
      keyExtractor={item => item._id}
      renderItem={({ item }) => {
        return <TouchableOpacity onPress={() => navigation.navigate('TrackDetail', { _id: item._id })}>
          <View style={styles.item}>
            <Text>{item.name}</Text>
          </View>
        </TouchableOpacity>
      }}
    />
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 20
  }
});