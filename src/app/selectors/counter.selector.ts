import { AppState} from '../reducers';
import { createSelector } from '@ngrx/store';

export const selectCounterState = (state: AppState) => state.counter;
export const selectCounterState2 = (state2: AppState) => state2.counter2;
export const getCount = createSelector(
  selectCounterState,
  counter => counter.count
);
export const getCounts = createSelector(
  selectCounterState2,
  counter2=> counter2.counts
);
