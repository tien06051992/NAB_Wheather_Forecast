import produce from 'immer';

import { STATUS } from 'utils/constants';
import {
  searchWeatherAction,
  searchWeatherSuccessAction,
  searchWeatherFailedAction,
} from 'containers/WeatherBoard/actions';
import homeReducer from '../reducer';
import {
  searchLocationAction,
  searchLocationSuccessAction,
  searchLocationFailedAction,
  changeCurrentLocationAction,
} from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('homeReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      currentLocation: null,
      location: {
        data: null,
        status: null,
      },
      weather: {
        data: null,
        status: null,
      },
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(homeReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the searchLocationAction action correctly', () => {
    const location = 'dummy city';
    const expectedResult = produce(state, draft => {
      draft.location.status = STATUS.PENDING;
    });

    expect(homeReducer(state, searchLocationAction(location))).toEqual(
      expectedResult,
    );
  });

  it('should handle the searchLocationSuccessAction action correctly', () => {
    const locations = [{ id: 1 }, { id: 2 }];
    const expectedResult = produce(state, draft => {
      draft.location.status = STATUS.SUCCESS;
      draft.location.data = locations;
    });

    expect(homeReducer(state, searchLocationSuccessAction(locations))).toEqual(
      expectedResult,
    );
  });

  it('should handle the searchLocationFailedAction action correctly', () => {
    const error = 'Dummy Error';
    const expectedResult = produce(state, draft => {
      draft.location.status = STATUS.FAILED;
      draft.location.error = error;
      draft.location.data = null;
    });

    expect(homeReducer(state, searchLocationFailedAction(error))).toEqual(
      expectedResult,
    );
  });

  it('should handle the changeCurrentLocationAction action correctly', () => {
    const woeid = 123;
    const expectedResult = produce(state, draft => {
      draft.currentLocation = woeid;
    });

    expect(homeReducer(state, changeCurrentLocationAction(woeid))).toEqual(
      expectedResult,
    );
  });

  it('should handle the searchWeatherAction action correctly', () => {
    const woeid = 123;
    const expectedResult = produce(state, draft => {
      draft.weather.status = STATUS.PENDING;
    });

    expect(homeReducer(state, searchWeatherAction(woeid))).toEqual(
      expectedResult,
    );
  });

  it('should handle the searchWeatherSuccessAction action correctly', () => {
    const weathers = [{ id: 1 }, { id: 2 }];
    const expectedResult = produce(state, draft => {
      draft.weather.status = STATUS.SUCCESS;
      draft.weather.data = weathers;
    });

    expect(homeReducer(state, searchWeatherSuccessAction(weathers))).toEqual(
      expectedResult,
    );
  });

  it('should handle the searchWeatherFailedAction action correctly', () => {
    const error = 'Dummy error';
    const expectedResult = produce(state, draft => {
      draft.weather.status = STATUS.FAILED;
      draft.weather.error = error;
      draft.weather.data = null;
    });

    expect(homeReducer(state, searchWeatherFailedAction(error))).toEqual(
      expectedResult,
    );
  });
});
