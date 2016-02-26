
import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import App from './App';


const reducers = combineReducers({
  routing: routerReducer,
});

const store = createStore(reducers);
const history = syncHistoryWithStore(browserHistory, store);

export default () => (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
      </Route>
    </Router>
  </Provider>
);
