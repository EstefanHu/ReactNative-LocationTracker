import React, { useContext } from 'react';
import {
  StyleSheet,
  TextInput,
  Button,
  View
} from 'react-native';
import { Context as LocationContext } from '../providers/LocationProvider.js';

export const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName
  } = useContext(LocationContext);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={text => changeName(text)}
        placeholder='Enter Name'
      />
      {recording ?
        <Button
          style={styles.button}
          title='Stop Recording'
          onPress={stopRecording}
        />
        : <Button
          style={styles.button}
          title='Start Recording'
          onPress={startRecording}
        />
      }
      {!recording && locations.length ? <Button style={styles.button} title='Save Recording' /> : null}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 5,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'grey',
    borderBottomWidth: 1,
    paddingHorizontal: 8,
    fontSize: 16
  },
  button: {
    backgroundColor: 'blue',
    width: '80%',
  }
});