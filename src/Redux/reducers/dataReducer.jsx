import {GET_UOM, GET_CURRENCY} from '../types';

const initialState = {
  uom: [],
  currency: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_UOM:
      return {
        ...state,
        uom: action.payload,
      };
    case GET_CURRENCY:
      return {
        ...state,
        currency: action.payload,
      };
    default:
      return state;
  }
}
