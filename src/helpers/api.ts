import {get, isArray, isEmpty, isFunction, isUndefined, keys, omitBy, replace, split} from 'lodash';
import fetchPonyfill from 'fetch-ponyfill';
import debugLib from 'debug';

const {fetch} = fetchPonyfill();
const debug = debugLib('insights-training-app/sdk');

/**
 * Main class to define request capabilities
 */
class Api {
  /**
   * Set It if you want change default 'api.shelf.io'
   * @type {string}
   */
  static API_HOST = 'api.shelf.io';
  /**
   * Set It if you want set JWT token not from base app
   * @type {null}
   */
  static AUTH_TOKEN?: string;
  /**
   * Function to intercept response
   * @type {function}
   */
  static onResponseInterceptor?(resp: Response): void;

  /**
   * Method to obtain host of request url
   *
   * @param {string} apiName - name of API to construct path
   * @param {object} queryParams
   * @returns {string}
   */
  static getEndpointURL(apiName?: string, queryParams?: Record<string, any>) {
    const queryString = this.constructQuery(queryParams);

    return `https://${this.API_HOST}/${apiName ? `${apiName}/` : ''}${queryString}`;
  }

  /**
   * Make headers based on AUTH_TOKEN
   *
   * @returns {{Accept: string, "Content-Type": string, Authorization: string}}
   */
  static headers() {
    const headers: any = {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    };

    if (Api.AUTH_TOKEN) {
      headers.Authorization = Api.AUTH_TOKEN;
    }

    return headers;
  }

  /**
   * Simple method to return pathname and qs
   * to replace use of 13kB gzipped uri-js (41kb minified)
   * just to display params in debug
   * @param {string} url
   * @return {*}
   */
  static _getPathnameAndQueryStrings = (url: string): {pathname: string; queryString: string} => {
    const [apiUrl, queryString = ''] = split(url, '?');
    const pathname = replace(apiUrl, Api.getEndpointURL(), '');

    return {pathname, queryString};
  };

  /**
   * Method to construct query string from plain object
   *
   * @param {object} queryObject
   * @returns {string}
   */
  static constructQuery(queryObject: Record<string, any> = {}) {
    const keyTerms = keys(omitBy(queryObject, isUndefined));

    if (!isEmpty(keyTerms)) {
      return `?${keyTerms
        .map(key => {
          const value = get(queryObject, key, '');

          if (isArray(value)) {
            return value
              .map(item => `${encodeURIComponent(key)}=${encodeURIComponent(item)}`)
              .join('&');
          }

          return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
        })
        .join('&')}`;
    }

    return '';
  }

  /**
   * Makes GET request
   * @param {string} route - API route
   * @param options
   * @returns {*}
   */
  static get<T>(route: string, options?) {
    return this.xhr<T>({url: route, method: 'GET', ...options});
  }

  /**
   * Makes PUT request
   * @param {string} route - API route
   * @param options
   * @returns {*}
   */
  static put<T>(route: string, options?) {
    return this.xhr<T>({url: route, method: 'PUT', ...options});
  }

  /**
   * Makes Post request
   * @param {string} route - API route
   * @param options
   * @returns {*}
   */
  static post<T>(route: string, options?) {
    return this.xhr<T>({url: route, method: 'POST', ...options});
  }

  /**
   * Makes PATCH request
   * @param {string} route - API route
   * @param options
   * @returns {*}
   */
  static patch<T>(route: string, options?) {
    return this.xhr<T>({url: route, method: 'PATCH', ...options});
  }

  /**
   * Makes DELETE request
   * @param {string} route - API route
   * @param options
   * @returns {*}
   */
  static delete<T>(route: string, options?) {
    return this.xhr<T>({url: route, method: 'DELETE', ...options});
  }
  /**
   * Makes fetch request (NOT USE DIRECTLY)
   * @param {string} params
   * @return {Promise<*>}
   */
  static async xhr<T>(params): Promise<T | string> {
    const {body, headers, json = true, method = 'GET', url, ...rest} = params;
    const options: RequestInit = {
      method,
      mode: 'cors' as RequestMode,
      headers: {...Api.headers(), ...headers},
      ...rest
    };

    if (body) {
      options.body = json ? JSON.stringify(body) : (body as BodyInit);
    }

    const {pathname, queryString} = Api._getPathnameAndQueryStrings(url);

    const resp = await fetch(url, options);
    let response = await resp.text();

    try {
      response = JSON.parse(response || '""');
    } catch {
      // Most of all it failed to parse response because it returns string instead of json
      // Eg. getWikiContent api
    }

    if (isFunction(Api.onResponseInterceptor)) {
      Api.onResponseInterceptor(resp);
    }

    if (resp.ok) {
      debug('%s %s ... %o', method, pathname, {
        request: params || queryString,
        response
      });

      const error = get(response, 'error', false);

      if (!isEmpty(error)) {
        throw error.message || error.toString();
      }

      return response;
    } else {
      throw response;
    }
  }
}

export const initAPI = (): void => {
  Api.API_HOST = process.env.API_HOST as string;
};

export {Api};
