import axios from 'axios';
import apiUrl from '../../services/api';
import {GET_PROFILE} from '../types';

// get profile
export const getProfileUser = idEmp => async dispatch => {
  await axios
    .get(`${apiUrl}/api/users/${idEmp}`)
    .then(response => {
      console.log('response.data user employee xxxxxxxxxxxxx', response.data);
      dispatch({
        type: GET_PROFILE,
        payload: response.data,
      });
    })
    .catch(err => console.log(`err get profile`, err));
};
