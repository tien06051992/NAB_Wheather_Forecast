// @flow
/* eslint-disable no-underscore-dangle */
import uniqueId from 'lodash/fp/uniqueId';

class ClientObject {
  __clientId = uniqueId('clientId_');

  get clientId() {
    return this.__clientId;
  }
}

export default ClientObject;
