import { combineReducers } from 'redux'
import doggos from './doggos.reducer';
import filters from './filters.reducer';

const doggosApp = combineReducers({
  doggos,
  filters
  // more reducers here
});

export default doggosApp;
