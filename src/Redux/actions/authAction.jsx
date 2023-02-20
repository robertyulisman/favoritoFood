import axios from 'axios';
import jwt_decode from 'jwt-decode';
import {GET_ERRORS, RESET_ERRORS, SET_CURRENT_USER} from '../types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import apiUrl from '../../services/api';
import setAuthToken from '../../utils/setAuthToken';

export const loginUser = data => dispatch => {
  console.log('data login user', data);
  console.log('apiUrl', apiUrl);
  axios
    .post(`${apiUrl}/api/users/login`, data)
    .then(response => {
      //   save to localstorage
      const {token, user} = response.data;
      console.log('ini token', token);
      // set token to ls
      AsyncStorage.setItem('jwtToken', token);
      // // Set token to auth header
      setAuthToken(token);
      // // decode token to get user data
      const decoded = jwt_decode(token);
      console.log('ini decoded', decoded);
      // //set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err => {
      console.log('res errr', err.response.data);
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};

//set logged user
export const setCurrentUser = decoded => async dispatch => {
  await dispatch({
    type: SET_CURRENT_USER,
    payload: decoded,
  });
};

// log user out
export const logoutUser = () => dispatch => {
  // remove token from async storage
  AsyncStorage.removeItem('jwtToken');
  // remove auth header for future request
  setAuthToken(false);
  dispatch(setCurrentUser({}));
};

// reset errors
export const resetError = () => async dispatch => {
  await dispatch({
    type: RESET_ERRORS,
  });
};
