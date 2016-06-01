// Action identifiers
export const NEXT_SLIDE = 'NEXT_SLIDE';
export const RANDOM_SLIDE = 'RANDOM_SLIDE';
export const START = 'START';
export const STOP = 'STOP';
export const MODE_SEQUENTIAL = 'MODE_SEQUENTIAL';
export const MODE_RANDOM = 'MODE_RANDOM';
export const SET_DELAY = 'SET_DELAY';

// Action creator functions
export function start() {
  return {
    type: START,
  };
}

export function stop() {
  return {
    type: STOP,
  };
}

export function setModeRandom() {
  return {
    type: MODE_RANDOM,
  };
}

export function setModeSequential() {
  return {
    type: MODE_SEQUENTIAL,
  };
}

export function setDelay(delay) {
  return {
    type: SET_DELAY,
    payload: {
      delay,
    },
  };
}