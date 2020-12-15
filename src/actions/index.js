import * as c from './ActionTypes';

export const requestParks = () => ({
  type: c.REQUEST_PARKS
});

export const getParksSuccess = (parkList) => ({
  type: c.GET_PARKS_SUCCESS,
  parkList
});

export const getParksFailure = (error) => ({
  type: c.GET_PARKS_FAILURE,
  error
});

export const hideEditForm = ({
  type: c.HIDE_EDIT_FORM
});

export const showEditForm = ({
  type: c.SHOW_EDIT_FORM
});

export const makeApiCall = (param, parkInfo) => {
  return dispatch => {
    dispatch(requestParks);
    return fetch(`http://localhost:5000/api/parks?`, {
      method: `${param}`,
      headers: { 'accept': 'text/plain', 'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`,
      body: `${parkInfo}`}})
      .then(response => response.json())
      .then(
        (jsonifiedResponse) => {
          dispatch(getParksSuccess(jsonifiedResponse));
        })
      .catch((error) => {
        dispatch(getParksFailure(error));
      });
  }
}

export const toggleForm = ({
  type: c.TOGGLE_FORM
});

export const selectedPark = (park) => {
  return {
    type: c.SELECTED_PARK,
    selectedPark: park
  }
}

export const unselectPark = ({
  type: c.UNSELECT_PARK
});