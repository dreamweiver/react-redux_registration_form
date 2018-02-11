// import { combineReducers } from 'redux';

// const reducers = combineReducers({
//   state: (state = {}) => state
// });

// export default reducers;

import { combineReducers } from 'redux-immutablejs'
import { reducer as form } from 'redux-form/immutable' // <--- immutable import

const reducer = combineReducers({ form })

export default reducer
