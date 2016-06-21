import * as CONSTANTS from './constants';

const getRandomSlide = (numSlides) =>
  Math.floor(Math.random() * numSlides);

export default (state = {
  slide: 0,
  playing: false,
  numSlides: 10,
  mode: CONSTANTS.SLIDE_MODES.SEQUENTIAL,
  delay: 500,
}, action) => {
  switch (action.type) {
    case CONSTANTS.NEXT_SLIDE: {
      return {
        ...state,
        slide: (state.slide + 1) % state.numSlides,
      };
    }
    case CONSTANTS.RANDOM_SLIDE: {
      let newSlide = getRandomSlide(state.numSlides);
      while (newSlide === state.slide) {
        newSlide = getRandomSlide(state.numSlides);
      }
      return {
        ...state,
        slide: newSlide,
      };
    }
    case CONSTANTS.START: {
      return {
        ...state,
        playing: true,
      };
    }
    case CONSTANTS.STOP: {
      return {
        ...state,
        playing: false,
      };
    }
    case CONSTANTS.MODE_SEQUENTIAL: {
      return {
        ...state,
        mode: CONSTANTS.SLIDE_MODES.SEQUENTIAL,
      };
    }
    case CONSTANTS.MODE_RANDOM: {
      return {
        ...state,
        mode: CONSTANTS.SLIDE_MODES.RANDOM,
      };
    }
    case CONSTANTS.SET_DELAY: {
      return {
        ...state,
        delay: action.payload.delay,
      };
    }
    default:
      return state;
  }
};
