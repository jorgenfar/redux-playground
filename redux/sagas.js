import { takeEvery, delay } from 'redux-saga';
import { put } from 'redux-saga/effects';

import { SLIDE_MODES } from './reducer';
import {
  NEXT_SLIDE,
  RANDOM_SLIDE,
  START,
} from './actions';

function* slideShow(getState) {
  while (getState().playing) {
    if (getState().mode === SLIDE_MODES.SEQUENTIAL) {
      yield put({ type: NEXT_SLIDE });
    }
    if (getState().mode === SLIDE_MODES.RANDOM) {
      yield put({ type: RANDOM_SLIDE });
    }
    yield delay(getState().delay);
  }
}

function* startSlideShow(getState) {
  yield takeEvery(START, () => slideShow(getState));
}

export default function* rootSaga(getState) {
  yield [
    startSlideShow(getState),
  ];
}