import {CLEAR_PROFILE, GET_PROFILE, UPDATE_PROFILE} from '../types';

const initialState = {
  profile: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    case UPDATE_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    case CLEAR_PROFILE:
      return {
        ...state,
        profile: {},
      };

    default:
      return state;
  }
}
