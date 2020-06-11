import { useContext } from 'react';
import { Context as TrackContext } from '../providers/TrackProvider.js';
import { Context as LocationContext } from '../providers/LocationProvider.js';
import { useNavigation } from '@react-navigation/native';

export default () => {
  const navigation = useNavigation();
  const { createTrack } = useContext(TrackContext);
  const {
    state: { name, locations },
    reset
  } = useContext(LocationContext);

  const saveTrack = async () => {
    await createTrack(name, locations);
    reset();
    navigation.goBack();
  };

  return [saveTrack];
}