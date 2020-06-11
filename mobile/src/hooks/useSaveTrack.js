import { useContext } from 'react';
import { Context as TrackContext } from '../providers/TrackProvider.js';
import { Context as LocationContext } from '../providers/LocationProvider.js';

export default () => {
  const { createTrack } = useContext(TrackContext);
  const {
    state: { name, locations },
    reset
  } = useContext(LocationContext);

  const saveTrack = async () => {
    await createTrack(name, locations);
    reset();
  };

  return [saveTrack];
}