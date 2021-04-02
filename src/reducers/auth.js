import * as types from '../actions/types/auth';

export default (state = {}, action) => {
  switch (action.type) {
    case types.LOGIN:
      return {
        uid: action.uid,
      };
    case types.LOGOUT:
      return {};
    default:
      return state;
  }
};
