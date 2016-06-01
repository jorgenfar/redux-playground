import {
  NEXT_SLIDE,
  RANDOM_SLIDE,
  START,
  STOP,
  MODE_SEQUENTIAL,
  MODE_RANDOM,
  SET_DELAY,
} from './actions';

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
