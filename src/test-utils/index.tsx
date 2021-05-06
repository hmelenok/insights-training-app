import {Store, createStore} from 'redux';
import {render} from '@testing-library/react';
import * as React from 'react';
import {ReactElement, ReactNode} from 'react';
import {Provider} from 'react-redux';
import {I18nextProvider, I18nextProviderProps} from 'react-i18next';
import {initialState} from '../store/initialState';
import {rootReducer} from '../store/reducers';
import i18next from '../i18next';
import {middlewares} from '../store';
import {AppState} from '../store/types';

export interface WithReduxArguments {
  initState?: Partial<AppState>;
  store?: Store;
}
export type WithI18nextArguments = Partial<I18nextProviderProps>;

export const withRedux = (
  ui: ReactNode,
  {initState}: WithReduxArguments = {}
): [ReactElement, Store] => {
  const store = createStore(rootReducer, {...initialState, ...initState}, middlewares);

  return [
    <Provider key="mock-store" store={store}>
      {ui}
    </Provider>,
    store
  ];
};

export const withI18next = (ui: ReactNode, {i18n}: WithI18nextArguments = {}) => {
  return <I18nextProvider i18n={i18n || i18next}>{ui}</I18nextProvider>;
};

export const renderWithRedux = (
  ui: ReactNode,
  {initState, store: passedStore}: WithReduxArguments = {}
) => {
  const [Provider, store] = withRedux(ui, {store: passedStore, initState});

  return {
    ...render(Provider),
    // adding `store` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    store
  };
};

export const renderWithAllProvider = (
  ui: ReactNode,
  {initState, store, i18n}: WithI18nextArguments & WithReduxArguments = {}
) => renderWithRedux(withI18next(ui, {i18n}), {store, initState});
