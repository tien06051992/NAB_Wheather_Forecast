/**
 * Tests for HomePage sagas
 */

import { put, takeLatest, all, fork, call } from 'redux-saga/effects';

import {
  searchLocationSuccessAction,
  searchLocationFailedAction,
} from 'containers/HomePage/actions';
import Location from 'models/Location';
import { SEARCH_LOCATION } from '../constants';
import saga, {
  searchLocationWatcher,
  searchLocationTask,
  searchLocationFetcher,
} from '../saga';

jest.mock(
  'fetchers/MetaWeatherFetcher',
  () =>
    function searchLocationFetcherMock() {
      return {
        fetchLocation: () => ({
          response: {
            isSuccess: true,
          },
        }),
      };
    },
);

/* eslint-disable redux-saga/yield-effects */
describe('saga', () => {
  describe('default saga', () => {
    it('should fork all watchers', () => {
      const iterator = saga();
      const result = iterator.next().value;

      expect(result).toEqual(all([fork(searchLocationWatcher)]));
    });
  });
});

describe('Watchers', () => {
  let iterator;
  let actualYield;
  let expectedYield;

  it('onProjectListInitWatcher', () => {
    iterator = searchLocationWatcher();

    actualYield = iterator.next().value;

    expectedYield = takeLatest(SEARCH_LOCATION, searchLocationTask);
    expect(actualYield).toEqual(expectedYield);
  });
});

describe('Tasks', () => {
  let iterator;
  let actualYield;
  let expectedYield;
  describe('searchLocationTask', () => {
    const action = {
      location: 'dummy city',
    };

    beforeEach(() => {
      iterator = searchLocationTask(action);

      actualYield = iterator.next().value;
      expectedYield = call(searchLocationFetcher, action.location);
      expect(actualYield).toEqual(expectedYield);
    });

    it('searchLocationTask response success', () => {
      const response = [
        {
          title: 'dummy title 1',
        },
        {
          title: 'dummy title 2',
        },
      ];
      const locations = [new Location(response[0]), new Location(response[1])];
      actualYield = iterator.next({ response }).value;
      expectedYield = put(searchLocationSuccessAction(locations));
      expect(actualYield.type).toEqual(expectedYield.type);
    });

    it('searchLocationTask response failed', () => {
      const error = 'dummy error';
      actualYield = iterator.next({ error }).value;
      expectedYield = put(searchLocationFailedAction(error));
      expect(actualYield.type).toEqual(expectedYield.type);
    });
  });
});

describe('searchLocationFetcher ', () => {
  it('watch', () => {
    const actualYield = searchLocationFetcher('dummy city');
    expect(actualYield).toEqual({
      response: {
        isSuccess: true,
      },
    });
  });
});
