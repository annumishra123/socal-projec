import {
  LOAD_DATA,
  INSERT,
  UPDATE,
  DELETE,
  UPDATE_INDEX,
  UPDATE_DATA,
} from "../actions/types";

const initialState = { users: [], user: [] };

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case INSERT:
      return {
        users: [payload, ...state.users],
      };

    case LOAD_DATA:
      return Object.assign({}, state, { users: [...payload] });

    case UPDATE:
      let al = [...state.users];
      al[payload.index].name.first = payload.data;
      return { ...state, users: [...al] };

    case DELETE:
      let a = state.users.filter((user) => {
        return user.login.uuid !== payload;
      });

      return { ...state, users: a };

    case UPDATE_INDEX:
      return { ...state };

    case UPDATE_DATA:
      return Object.assign({}, state, { users: [...state.users, ...payload] });

    default:
      return state;
  }
}
