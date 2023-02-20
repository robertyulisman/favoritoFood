import {GET_ERRORS, RESET_ERRORS} from '../types';

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return action.payload;

    case RESET_ERRORS:
      return {
        ...state,
        initialState: {},
        message: '',
      };
    default:
      return state;
  }
}
