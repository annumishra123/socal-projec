import { LOAD_DATA } from "../actions/types";

const initialState = { users: [], user: [] };

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOAD_DATA:
      return Object.assign({}, state, { users: [...payload] });
      // return { ...state, users: [...payload] };
      
    default:
      return state;
  }
}