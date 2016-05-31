export const NEXT_SLIDE = 'NEXT_SLIDE';
export const RANDOM_SLIDE = 'RANDOM_SLIDE';
export const START = 'START';
export const STOP = 'STOP';
export const MODE_SEQUENTIAL = 'MODE_SEQUENTIAL';
export const MODE_RANDOM = 'MODE_RANDOM';
export const SET_DELAY = 'SET_DELAY';

export const SLIDE_MODES = {
  SEQUENTIAL: 'SEQUENTIAL',
  RANDOM: 'RANDOM',
};

function getRandomSlide(numSlides) {
  return Math.floor(Math.random() * numSlides);
}

export default function reducer(state = {
  slide: 0,
  playing: false,
  numSlides: 10,
  mode: SLIDE_MODES.SEQUENTIAL,
  delay: 500,
}, action) {
  switch (action.type) {
    case NEXT_SLIDE: {
      return {
        ...state,
        slide: (state.slide + 1) % state.numSlides,
      };
    }
    case RANDOM_SLIDE: {
      let newSlide = getRandomSlide(state.numSlides);
      while (newSlide === state.slide) {
        newSlide = getRandomSlide(state.numSlides);
      }
      return {
        ...state,
        slide: newSlide,
      };
    }
    case START: {
      return {
        ...state,
        playing: true,
      };
    }
    case STOP: {
      return {
        ...state,
        playing: false,
      };
    }
    case MODE_SEQUENTIAL: {
      return {
        ...state,
        mode: SLIDE_MODES.SEQUENTIAL,
      };
    }
    case MODE_RANDOM: {
      return {
        ...state,
        mode: SLIDE_MODES.RANDOM,
      };
    }
    case SET_DELAY: {
      return {
        ...state,
        delay: action.payload.delay,
      };
    }
    default:
      return state;
  }
}

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
