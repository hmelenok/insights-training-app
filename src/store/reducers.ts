import {initialState} from './initialState';
import {ActionTypes, AppAction} from './actionTypes';
import {AppState} from './types';

export const rootReducer = (state = initialState, action: AppAction): AppState => {
  switch (action.type) {
    case ActionTypes.RESET_APP_NAME:
      return {
        ...state,
        appName: initialState.appName,
      };

    case ActionTypes.SET_APP_NAME:
      return {
        ...state,
        appName: action.payload,
      };

    default:
      return state;
  }
};
