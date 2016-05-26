import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import { login } from './app/reducers';
import routes from './app/routes';
import Greeter from './app/login/containers/greeter';

const store = createStore(
  login,
  login(),
  window.devToolsExtension && window.devToolsExtension()
);

const App = (props) => (
  <Provider store={store}>
    <Greeter/>
  </Provider>
);

ReactDOM.render(<App/>, document.getElementById('app'));
