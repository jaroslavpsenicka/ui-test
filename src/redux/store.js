import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { reducer as formReducer } from 'redux-form'
import thunk from 'redux-thunk'

import { submitReducer, dataReducer } from './reducers'

const reducers = combineReducers({
  form: formReducer, 
  submit: submitReducer,
  data: dataReducer
});

const ext = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(reducers, compose(applyMiddleware(thunk), ext))

export default store;
