
import { Route, Router, browserHistory } from 'react-router';
import { combineReducers, createStore } from 'redux';
import { routerReducer, syncHistoryWithStore } from 'react-router-redux';
import App from './App';
import { Provider } from 'react-redux';
import React from 'react';


const reducers = combineReducers({
  routing: routerReducer,
});

const store = createStore(reducers);
const history = syncHistoryWithStore(browserHistory, store);

const AppRouter = () => (
  <Provider store={store}>
    <Router history={history}>
      <Route component={App} path="/">
        {/* routes here */}
      </Route>
    </Router>
  </Provider>
);

export default AppRouter;
