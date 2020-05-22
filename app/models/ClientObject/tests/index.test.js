import uniqueId from 'lodash/fp/uniqueId';
import ClientObject from '../index';

jest.mock('lodash/fp/uniqueId');
uniqueId.mockImplementation(() => 'uniqueId');

describe('new ClientObject instance', () => {
  it('get clientId correctly', () => {
    const newInstance = new ClientObject();
    expect(newInstance.clientId).toBe('uniqueId');
  });
});
