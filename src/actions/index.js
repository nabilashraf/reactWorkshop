import * as types from '../constants';

export const incrementCounterAction = () => ({
  type: types.INCREMENT_COUNTER,
});

export const decrementCounterAction = () => ({
  type: types.DECREMENT_COUNTER,
})