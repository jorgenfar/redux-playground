import { takeEvery, delay } from 'redux-saga';
import { put } from 'redux-saga/effects';
import {
  NEXT_SLIDE,
  RANDOM_SLIDE,
  SLIDE_MODES,
  START,
} from './reducer';

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

function* toggleSlideShow(getState) {
  yield takeEvery(START, () => slideShow(getState));
}

export default function* rootSaga(getState) {
  yield [
    toggleSlideShow(getState),
  ];
}
