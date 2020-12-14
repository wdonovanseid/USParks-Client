import parksReducer from '../../reducers/parks-reducer';
import * as c from './../../actions/ActionTypes';

describe('parksReducer', () => {

  let action;

  const defaultState = {
    isLoading: false,
    parks: [],
    error: null
  };

  test('should successfully return the default state if no action is passed into it', () => {
    expect(parksReducer(defaultState, {type: null })).toEqual(
      {
        isLoading: false,
        parks: [],
        error: null
      }
    );
  });
  test('requesting parks should successfully change isLoading from false to true', () => {
    action = {
      type: c.REQUEST_PARKS
    };

    expect(parksReducer(defaultState, action)).toEqual({
        isLoading: true,
        parks: [],
        error: null
    });
  });
});