import React from 'react';
import {
  StyleSheet,
  TextInput,
  Button
} from 'react-native';

export const TrackForm = () => {
  return (
    <>
      <TextInput
        style={styles.input}
        placeholder='Enter Name'
      />
      <Button
        style={styles.button}
        title='Start Recording'
      />
    </>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 10,
    width: '80%',
  },
  button: {
    
  }
});