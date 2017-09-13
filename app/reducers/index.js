import { combineReducers } from 'redux';

import sample from 'reducers/sample';
import selector from 'reducers/selector'

const rootReducer = combineReducers({
  sample,
  selector
});

export default rootReducer;
