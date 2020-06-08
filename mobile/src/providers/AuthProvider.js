import createDataContext from './createDataContext.js';
import trackerApi from '../api/tracker.js';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'Signup':
      return state;
    case 'Signin':
      return state;
    case 'Signout':
      return state;
    default:
      return state;
  }
};

const signup = dispatch => {
  return async ({ email, password }) => {
    try {
      const response = await trackerApi.post('/signup', { email, password });
      console.log(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };
};

const signin = (dispatch) => {
  return ({ email, password }) => {

  };
};

const signout = (dispatch) => {
  return ({ email, password }) => {

  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout },
  { isSignedIn: false }
);