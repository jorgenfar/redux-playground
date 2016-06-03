export const NEXT_SLIDE = 'NEXT_SLIDE';
export const RANDOM_SLIDE = 'RANDOM_SLIDE';
export const START = 'START';
export const STOP = 'STOP';
export const MODE_SEQUENTIAL = 'MODE_SEQUENTIAL';
export const MODE_RANDOM = 'MODE_RANDOM';
export const SET_DELAY = 'SET_DELAY';

export const nextSlide = () => ({
  type: NEXT_SLIDE,
});

export const randomSlide = () => ({
  type: RANDOM_SLIDE,
});

export const start = () => ({
  type: START,
});

export const stop = () => ({
  type: STOP,
});

export const setModeRandom = () => ({
  type: MODE_RANDOM,
});

export const setModeSequential = () => ({
  type: MODE_SEQUENTIAL,
});

export const setDelay = (delay) => ({
  type: SET_DELAY,
  payload: {
    delay,
  },
});
