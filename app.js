import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';
import Counter from './Counter';
import reducer, {
  START,
  STOP,
} from './reducer';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(() => rootSaga(store.getState));

const action = (type) => store.dispatch({ type });

function render() {
  ReactDOM.render(
    <Counter
      value={store.getState().slide}
      start={() => action(START)}
      stop={() => action(STOP)}
    />,
    document.getElementById('root')
  );
}

render();
store.subscribe(render);
