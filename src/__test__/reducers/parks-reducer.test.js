import parksReducer from '../../reducers/parks-reducer';
import * as c from './../../actions/ActionTypes';

describe('parksReducer', () => {

  let action;

  const defaultState = {
    isLoading: false,
    parkList: [],
    error: null
  };

  const loadingState = {
    isLoading: false,
    parkList: [],
    error: null
  };

  test('should successfully return the default state if no action is passed into it', () => {
    expect(parksReducer(defaultState, {type: null })).toEqual(
      {
        isLoading: false,
        parkList: [],
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
        parkList: [],
        error: null
    });
  });

  test('successfully getting parks should change isLoading to false and update parks', () => {
    const parks = "A park";
    action = {
      type: c.GET_PARKS_SUCCESS,
      parkList: parks
    };

    expect(parksReducer(loadingState, action)).toEqual({
        isLoading: false,
        parkList: "A park",
        error: null
    });
  });

  test('failing to get parks should change isLoading to false and add an error message', () => {
    const error = "An error";
    action = {
      type: c.GET_PARKS_FAILURE,
      error
    };

    expect(parksReducer(loadingState, action)).toEqual({
        isLoading: false,
        parkList: [],
        error: "An error"
    });
  });

});