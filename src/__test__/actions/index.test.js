import * as actions from './../../actions';
import * as c from './../../actions/ActionTypes';

describe('Park reducer actions', () => {
  it('requestParks should create REQUEST_PARKS action', () => {
    expect(actions.requestParks()).toEqual({
      type: c.REQUEST_PARKS
    });
  });

  it('getParksSuccess should create GET_PARKS_SUCCESS action', () => {
    const parks = "A Park";
    expect(actions.getParksSuccess(parks)).toEqual({
      type: c.GET_PARKS_SUCCESS,
      parks
    });
  });

  it('getParksFailure should create GET_PARKS_FAILURE action', () => {
    const error = "An error";
    expect(actions.getParksFailure(error)).toEqual({
      type: c.GET_PARKS_FAILURE,
      error
    });
  });
});