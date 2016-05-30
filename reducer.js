export const NEXT_SLIDE = 'NEXT_SLIDE';
export const RANDOM_SLIDE = 'RANDOM_SLIDE';
export const START = 'START';
export const STOP = 'STOP';

export const SLIDE_MODES = {
  SEQUENTIAL: 'SEQUENTIAL',
  RANDOM: 'RANDOM',
};

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
      return {
        ...state,
        slide: Math.floor(Math.random() * state.numSlides),
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
    default:
      return state;
  }
}
