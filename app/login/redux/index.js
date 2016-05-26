const CHANGE_NAME = 'CHANGE_NAME';

export default (state = { name: 'Emil' }, action = {}) => {
  switch (action.type) {
    case CHANGE_NAME: {
      if (state.name === 'Jørgen') {
        return {
          name: 'Emil',
        };
      }
      if (state.name === 'Emil') {
        return {
          name: 'Jørgen',
        };
      }
    }
    default:
      return state;
  }
}

export function changeName() {
  return {
    type: CHANGE_NAME,
  };
}
