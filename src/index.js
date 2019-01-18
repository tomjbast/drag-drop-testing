import React from 'react';
import ReactDOM from 'react-dom';
import AppWrapper from './containers/AppWrapper';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, {}, composeEnhancers(
  applyMiddleware(thunkMiddleware)
));

/* JONCOM
// Testing testing
 */
ReactDOM.render(
  <Provider store={store}>
    <AppWrapper/>
  </Provider>,
  document.getElementById('root'));
