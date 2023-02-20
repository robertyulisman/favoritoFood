import axios from 'axios';
import apiUrl from '../../services/api';
import {GET_UOM, GET_CURRENCY} from '../types';

export const getUom = () => async dispatch => {
  await axios
    .get(`${apiUrl}/api/uom`)
    .then(response => {
      dispatch({
        type: GET_UOM,
        payload: response.data,
      });
    })
    .catch(err => console.log(`err get uom`, err));
};

export const getCurrency = () => async dispatch => {
  await axios
    .get(`${apiUrl}/api/currency`)
    .then(response => {
      dispatch({
        type: GET_CURRENCY,
        payload: response.data,
      });
    })
    .catch(err => console.log(`err get currency`, err));
};
