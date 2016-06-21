import * as CONSTANTS from './constants';

export const nextSlide = () => ({
  type: CONSTANTS.NEXT_SLIDE,
});

export const randomSlide = () => ({
  type: CONSTANTS.RANDOM_SLIDE,
});

export const start = () => ({
  type: CONSTANTS.START,
});

export const stop = () => ({
  type: CONSTANTS.STOP,
});

export const setModeRandom = () => ({
  type: CONSTANTS.MODE_RANDOM,
});

export const setModeSequential = () => ({
  type: CONSTANTS.MODE_SEQUENTIAL,
});

export const setDelay = (delay) => ({
  type: CONSTANTS.SET_DELAY,
  payload: {
    delay,
  },
});
