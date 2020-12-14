import * as c from './../actions/ActionTypes';

const defaultState = {
  isLoading: false,
  parks: [],
  error: null
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case c.REQUEST_PARKS:
      return Object.assign({}, state, {
        isLoading: true
      });
    default:
      return state;
    }
};