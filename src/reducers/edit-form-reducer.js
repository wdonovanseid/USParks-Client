import * as c from './../actions/ActionTypes';

export default (state = false, action) => {
  switch (action.type) {
    case c.SHOW_EDIT_FORM:
      return !state;
    case c.HIDE_EDIT_FORM:
      const newState = false;
      return newState;
    default:
      return state;
  }
};