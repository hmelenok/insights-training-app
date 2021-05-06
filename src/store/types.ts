import {ThunkAction} from 'redux-thunk';
import {AppAction} from './actionTypes';

export type ReduxAsyncAction<R = void> = ThunkAction<R, AppState, null, AppAction>;

export interface AppState {
  appName: string;
}
