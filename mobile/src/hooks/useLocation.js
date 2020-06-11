import { useState, useEffect } from 'react';
import {
  Accuracy,
  requestPermissionsAsync,
  watchPositionAsync
} from 'expo-location';

export default callback => {
  const [errorMsg, setErrorMsg] = useState(null);


  const startWatching = async () => {
    try {
      await requestPermissionsAsync();
      await watchPositionAsync({
        accuracy: Accuracy.BestForNavigation,
        timeInterval: 1000,
        distanceInterval: 10
      }, callback);
    } catch (err) {
      setErrorMsg(err);
    }
  }

  useEffect(() => {
    startWatching();
  }, []);

  return [errorMsg];
}