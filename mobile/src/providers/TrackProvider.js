import createDataContext from './createDataContext.js';
import trackerApi from '../api/tracker.js';

const TrackReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

const fetchTracks = dispatch => () => { };

const createTrack = dispatch => (name, locations) => {
  
};

export const { Provider, Context } = createDataContext(
  TrackReducer,
  { fetchTracks, createTrack },
  []
);