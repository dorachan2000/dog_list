import { combineReducers } from 'redux';

import sample from 'reducers/sample';
import dogSelector from 'reducers/dogSelector'

const rootReducer = combineReducers({
  sample,
  dogSelector
});

export default rootReducer;
