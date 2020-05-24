/**
 * Tests for HomePage sagas
 */

import { put, takeLatest, all, fork, call } from 'redux-saga/effects';

import Weather from 'models/Weather';
import {
  searchWeatherSuccessAction,
  searchWeatherFailedAction,
} from '../actions';
import { SEARCH_WEATHER } from '../constants';
import saga, {
  searchWeatherWatcher,
  searchWeatherTask,
  searchWeatherFetcher,
} from '../saga';

jest.mock(
  'fetchers/MetaWeatherFetcher',
  () =>
    function searchLocationFetcherMock() {
      return {
        fetchWeather: () => ({
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

      expect(result).toEqual(all([fork(searchWeatherWatcher)]));
    });
  });
});

describe('Watchers', () => {
  let iterator;
  let actualYield;
  let expectedYield;

  it('onProjectListInitWatcher', () => {
    iterator = searchWeatherWatcher();

    actualYield = iterator.next().value;

    expectedYield = takeLatest(SEARCH_WEATHER, searchWeatherTask);
    expect(actualYield).toEqual(expectedYield);
  });
});

describe('Tasks', () => {
  let iterator;
  let actualYield;
  let expectedYield;
  describe('searchWeatherTask', () => {
    const action = {
      woeid: 123,
    };

    beforeEach(() => {
      iterator = searchWeatherTask(action);

      actualYield = iterator.next().value;
      expectedYield = call(searchWeatherFetcher, action.woeid);
      expect(actualYield).toEqual(expectedYield);
    });

    it('searchWeatherTask response success', () => {
      const response = [
        {
          applicable_date: '05-24-2020',
          min_temp: 28,
          max_temp: 30,
          id: 1,
        },
        {
          applicable_date: '05-24-2020',
          min_temp: 28,
          max_temp: 33,
          id: 2,
        },
      ];
      const weathers = [new Weather(response[0]), new Weather(response[1])];
      actualYield = iterator.next({ response }).value;
      expectedYield = put(searchWeatherSuccessAction(weathers));
      expect(actualYield.type).toEqual(expectedYield.type);
    });

    it('searchWeatherTask response failed', () => {
      const error = 'dummy error';
      actualYield = iterator.next({ error }).value;
      expectedYield = put(searchWeatherFailedAction(error));
      expect(actualYield.type).toEqual(expectedYield.type);
    });
  });
});

describe('searchWeatherFetcher ', () => {
  it('watch', () => {
    const actualYield = searchWeatherFetcher(123);
    expect(actualYield).toEqual({
      response: {
        isSuccess: true,
      },
    });
  });
});
