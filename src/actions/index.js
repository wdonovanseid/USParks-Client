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
  let request = "";
  let cURL = "";
  if (param === 'put') {
    cURL = `http://localhost:5000/api/parks/${parkInfo.parkId}`;
    request = {
      method: `${param}`,
      headers: { 'accept': '*/*', 'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`, 'Content-Type': 'application/json'},
      body: JSON.stringify(parkInfo)}
  }
  if (param === 'delete') {
    cURL = `http://localhost:5000/api/parks/${parkInfo.parkId}`;
    request = {
      method: `${param}`,
      headers: { 'accept': 'text/plain', 'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`}}
  }
  if (param === 'post') {
    cURL = "http://localhost:5000/api/parks"
    request = {
      method: `${param}`,
      headers: { 'accept': '*/*', 'Content-Type': 'application/json', 'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`},
      body: JSON.stringify(parkInfo)}
  }
  if (param === 'get') {
    cURL = "http://localhost:5000/api/parks?"
    request = {
      //method: `${param}`,
      headers: { 'accept': 'text/plain', 'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`}}
  }
  console.log("parkInfo ", parkInfo)
  console.log("request ", request)
  return dispatch => {
    dispatch(requestParks);
    return fetch(cURL, request)
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
