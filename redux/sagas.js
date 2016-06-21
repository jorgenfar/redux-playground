import { takeLatest, delay } from 'redux-saga';
import { put } from 'redux-saga/effects';

import { SLIDE_MODES, START } from './constants';
import { nextSlide, randomSlide } from './actions';

function* slideShow(getState) {
  while (getState().playing) {
    if (getState().mode === SLIDE_MODES.SEQUENTIAL) {
      yield put(nextSlide());
    }
    if (getState().mode === SLIDE_MODES.RANDOM) {
      yield put(randomSlide());
    }
    yield delay(getState().delay);
  }
}

function* startSlideShow(getState) {
  yield takeLatest(START, () => slideShow(getState));
}

export default function* rootSaga(getState) {
  yield [
    startSlideShow(getState),
  ];
}
