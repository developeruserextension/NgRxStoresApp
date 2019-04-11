import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromCounter from './counter.reducer';

export interface AppState {
counter: fromCounter.CounterState;
}
export interface AppState {
counter2: fromCounter.CounterState2;
}
export const reducers: ActionReducerMap<AppState> = {
  counter: fromCounter.reducer,
  counter2:fromCounter.reducer1
 };

export const metaReducers: MetaReducer<AppState>[] = !environment.production?[]:[];
