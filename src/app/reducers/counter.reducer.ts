import { Action } from '@ngrx/store';

export interface CounterState {
  count: any;
}
export interface CounterState2 {
  counts: any;
}

export const initialState: CounterState = {
  count: 12

};

export const initialState2: CounterState2 = {
  counts: -6

};
export function reducer(state = initialState, action: Action): CounterState {
  return { ...state, count: state.count - 2};

}
export function reducer1(state2 = initialState2, action: Action): CounterState2 {
  return { ...state2, counts: state2.counts + 1};

}
