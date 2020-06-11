import createDataContext from './createDataContext.js';
import trackerApi from '../api/tracker.js';

const TrackReducer = (state, action) => {
  switch (action.type) {
    case 'fetch_tracks':
      return action.payload;
    default:
      return state;
  }
}

const fetchTracks = dispatch => async () => {
  console.log('fetching tracks');
  const response = await trackerApi.get('/tracks');
  console.log(response);
  dispatch({ type: 'fetch_tracks', payload: response.data });
};

const createTrack = dispatch => async (name, locations) => {
  await trackerApi.post('/tracks', { name, locations });
};

export const { Provider, Context } = createDataContext(
  TrackReducer,
  { fetchTracks, createTrack },
  []
);