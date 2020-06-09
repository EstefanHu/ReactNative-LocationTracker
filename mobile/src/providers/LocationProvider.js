import createDataContext from './createDataContext.js';

const locationReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

const startRecording = dispatch => () => { };

const stopRecording = dispatch => () => { };

const addLocation = dispatch => () => { };

export const { Provider, Context } = createDataContext(
  locationReducer,
  { startRecording, stopRecording, addLocation },
  { recording: false, locations: [], currentLocation: null }
);