import * as types from '../constants';

const initial = {
  counter: 0,
  data: [],
  isAuth: false,
};

export default (state = initial, action) => {
  switch (action.type) {
    case types.INCREMENT_COUNTER:
      return { ...state, ...{counter: state.counter + 1} };
    case types.DECREMENT_COUNTER:
      return { ...state, ...{counter: state.counter - 1} };
    default:
      return state;
  }
};