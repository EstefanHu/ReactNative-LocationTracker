import createDataContext from './createDataContext.js';

const TrackReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

const fetchTracks = dispatch => () => { };

const createTrack = dispatch => (name, locations) => {
  console.log(name, locations.length);
};

export const { Provider, Context } = createDataContext(
  TrackReducer,
  { fetchTracks, createTrack },
  []
);