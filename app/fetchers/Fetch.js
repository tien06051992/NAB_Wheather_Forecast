import 'whatwg-fetch';
import isNil from 'lodash/fp/isNil';

export const defaultHeader = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export function convertToJson(payload) {
  return JSON.stringify(payload);
}

export const notApplyCacheHeader = {
  headers: {
    'Cache-Control': 'no-cache, no-store',
    pragma: 'no-cache',
  },
};

export const handleGeneralError = error => {
  if (!isNil(error.response)) {
    return {
      error: error.response
        .clone()
        .json()
        .catch(() => error.response.text())
        .then(objData => ({
          error: { ...objData, status: error.response.status },
        })),
    };
  }
  return { error };
};

export const FormConfig = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
  },
};

class Fetcher {
  constructor(path, customConfig) {
    this.path = path;
    this.customConfig = customConfig;
  }

  buildPath = path =>
    path ? (path[0] === '/' ? path.substring(1) : path) : ''; // eslint-disable-line no-nested-ternary

  buildHeaders = (configFetch = {}) => {
    let headers = {};
    /* istanbul ignore else */
    if (!configFetch.removeDefaultHeader) {
      headers = Object.assign(headers, defaultHeader);
    }
    Object.assign(headers, configFetch.headers);
    return headers;
  };

  internalFetch = (path, option) => {
    const finalUrl = this.buildPath(path);
    const finalObject = {};
    Object.assign(
      finalObject,
      {
        // un-comment credentials below if you need to send cookies together with fetch()
        // https://github.com/github/fetch#sending-cookies -
        // credentials: 'same-origin'
        cache: 'default',
        mode: 'cors',
        url: finalUrl,
        headers: this.buildHeaders(option.config),
      },
      option,
    );

    return fetch(finalUrl, finalObject)
      .then(this.handleGeneralResponse)
      .catch(error => {
        throw error;
      });
  };

  /**
   * Checks if a network request came back fine, and throws an error if not
   *
   * @param  {object} response   A response from a network request
   *
   * @return {object|undefined} Returns either the response, or throws an error
   */
  handleGeneralResponse = response => {
    /* istanbul ignore else */
    if (response.status >= 200 && response.status < 300) {
      return response;
    }
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  };

  /**
   * Get data
   */
  get = () =>
    this.internalFetch(this.path, {
      method: 'GET',
      config: this.customConfig,
    });

  /**
   * Post JSON
   */
  post = payload =>
    this.internalFetch(this.path, {
      method: 'POST',
      body: payload,
      config: this.customConfig,
    });

  /**
   * put
   */
  put = payload =>
    this.internalFetch(this.path, {
      method: 'PUT',
      body: payload,
      config: this.customConfig,
    });

  /**
   * put
   */
  patch = payload =>
    this.internalFetch(this.path, {
      method: 'PATCH',
      body: payload,
      config: this.customConfig,
    });

  /**
   * delete
   */
  delete = () =>
    this.internalFetch(this.path, {
      method: 'DELETE',
      // Need to change to adapt the BE
      body: convertToJson({}),
      config: this.customConfig,
    });
}

/**
 * Create an fetch instance to call http request
 * customConfig can be {excludeAuthHeader = true/false, headers: {  }}
 */
export default function(path, customConfig) {
  return new Fetcher(path, customConfig);
}
