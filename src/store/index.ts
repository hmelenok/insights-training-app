import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import {MakeStore, createWrapper} from 'next-redux-wrapper';
import {initialState} from './initialState';
import {rootReducer} from './reducers';
import {AppState} from './types';

const commonMiddleware = applyMiddleware(thunkMiddleware);

export const middlewares =
  process.env.ENVIRONMENT === 'prod' ? commonMiddleware : composeWithDevTools(commonMiddleware);

export const makeStore: MakeStore<AppState> = () =>
  createStore(rootReducer, initialState, middlewares);

export const wrapper = createWrapper(makeStore);
