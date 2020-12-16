import * as c from './../actions/ActionTypes';

const defaultState = {
  isLoading: false,
  parkList: [],
  error: null
}
// eslint-disable-next-line
export default (state = defaultState, action) => {
  switch (action.type) {
    case c.REQUEST_PARKS:
      return Object.assign({}, state, {
        isLoading: true
      });
    case c.GET_PARKS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        parkList: action.parkList
      });
    case c.GET_PARKS_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error
      });
    default:
      return state;
    }
};