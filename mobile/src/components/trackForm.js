import React from 'react';
import {
  StyleSheet,
  TextInput,
  Button,
  View
} from 'react-native';

export const TrackForm = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Enter Name'
      />
      <Button
        style={styles.button}
        title='Start Recording'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 5,
  },
  input: {
    height: 10,
    width: '80%',
    paddingVertical: 15,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
  button: {
    backgroundColor: 'blue',
    width: '80%',
  }
});