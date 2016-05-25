import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import name from './reducers';
import Greeter from './greeter';

const store = createStore(
  name,
  name(),
  window.devToolsExtension && window.devToolsExtension()
);

const App = (props) => (
  <Provider store={store}>
    <Greeter/>
  </Provider>
);

ReactDOM.render(<App/>, document.getElementById('app'));
