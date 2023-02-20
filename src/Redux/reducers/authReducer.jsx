import isEmpty from '../../validation/is-empty';
import {SET_CURRENT_USER} from '../types';

const initialState = {
  isAuthenticated: false,
  user: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      // console.log('state apa bro ?', user);

      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
      };

    default:
      return state;
  }
}
