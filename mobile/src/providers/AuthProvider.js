import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext.js';
import trackerApi from '../api/tracker.js';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    case 'clear_error_message':
      return { ...state, errorMessage: '' }
    case 'sign_up':
      return { errorMessage: '', token: action.payload };
    case 'sign_in':
      return { errorMessage: '', token: action.payload };
    default:
      return state;
  }
};

const clearErrorMessage = dispatch => () => {
  dispatch({ type: 'clear_error_message' })
}

const signup = dispatch => async ({ email, password }) => {
  try {
    const response = await trackerApi.post('/signup', { email, password });
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: 'sign_up', payload: response.data.token });
  } catch (err) {
    dispatch({ type: 'add_error', payload: 'Something went wrong with sign up' });
  }
};

const signin = dispatch => async ({ email, password }) => {
  try {
    const response = await trackerApi.post('/signin', { email, password });
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: 'sign_in', payload: response.data.token });
  } catch (err) {
    console.log(err);
    dispatch({ type: 'add_error', payload: 'Something went wrong with sign in' });
  }
};

const tryLocalSignin = dispatch => async () => {
  const token = await AsyncStorage.getItem('token');
  if (token) dispatch({ type: 'sign_in', payload: token });
}

const signout = dispatch => async () => {
  
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout, clearErrorMessage, tryLocalSignin },
  { token: null, errorMessage: '' }
);