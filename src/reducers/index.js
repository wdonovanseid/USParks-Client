import { combineReducers } from 'redux';
import editFormReducer from './edit-form-reducer';
import parksReducer from './parks-reducer';
import selectedParkReducer from './selected-park_reducer';
import formVisibleReducer from './form-visible-reducer';

const rootReducer = combineReducers({
  parkApiCall: parksReducer,
  selectedPark: selectedParkReducer,
  editFormVisible: editFormReducer,
  formVisibleOnPage: formVisibleReducer
});

export default rootReducer;