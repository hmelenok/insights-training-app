import {get, isEmpty} from 'lodash';
import {NextRouter} from 'next/router';
import qs from 'qs';
import {LOGIN_PAGE_URL, TOKEN_KEY} from './constants';
import client from './GraphQLClient';

export const setToken = (token: string) => {
  client.setHeader('authorization', token);
  localStorage.setItem(TOKEN_KEY, token);
};

export const getToken = () => localStorage.getItem(TOKEN_KEY);

/**
 * Check if there is token available
 * And redirect to login page in case it is not
 */
export const validateAuth = () => {
  if (!getToken()) {
    redirectToAuthWithReturn();
  }
};

export const validateUnauthorizedError = err => {
  const error = get(err, 'response.errors.0.errorType');

  if (error === 'Unauthorized') {
    return redirectToAuthWithReturn();
  }
};

export const redirectToAuthWithReturn = () => {
  const successRedirectURL = `${window.location.origin}/login/`;

  window.location.href = `${LOGIN_PAGE_URL}?successRedirectURL=${successRedirectURL}`;
};

export const logout = () => {
  // TODO: implement logout
};

/**
 * Static export(in next js) not parsing query params
 */
export const populateSafeQueryParams = (router: NextRouter): NextRouter => {
  if (isEmpty(router.query) && router.asPath.includes('?')) {
    router.query = qs.parse(router.asPath.split('?')[1] || '');

    return router;
  }

  return router;
};
