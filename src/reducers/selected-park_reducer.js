import * as c from './../actions/ActionTypes';

export default (state = null, action) => {
  const { selectedPark } = action;
  switch (action.type) {
  case c.SELECTED_PARK:
    const newState = selectedPark;
    return newState;
  case c.UNSELECT_PARK:
    const newState2 = null;
    return newState2;
  default:
    return state;
  }
};