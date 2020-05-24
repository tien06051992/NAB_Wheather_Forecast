/**
 * Gets the repositories of the user from Github
 */

import { call, put, takeLatest, all, fork } from 'redux-saga/effects';
import get from 'lodash/fp/get';
import slice from 'lodash/fp/slice';

import { mapToModel } from 'utils/mapData';
import Weather from 'models/Weather';
import MetaWeatherFetcher from 'fetchers/MetaWeatherFetcher';
import {
  searchWeatherSuccessAction,
  searchWeatherFailedAction,
} from 'containers/WeatherBoard/actions';

import { SEARCH_WEATHER } from './constants';

/**
 * WeatherBoard saga
 */
export default function* saga() {
  yield all([fork(searchWeatherWatcher)]);
}

export function* searchWeatherWatcher() {
  yield takeLatest(SEARCH_WEATHER, searchWeatherTask);
}

/**
 * Search weather request/response handler
 */
export function* searchWeatherTask(action) {
  const { woeid } = action;

  const { response, error } = yield call(searchWeatherFetcher, woeid);
  if (response) {
    const weathers = mapToModel({
      data: slice(0, 5, get('consolidated_weather', response)),
      Model: Weather,
    });
    yield put(searchWeatherSuccessAction(weathers));
  } else {
    yield put(searchWeatherFailedAction(error));
  }
}

export const searchWeatherFetcher = (woeid: string) => {
  const fetcher = new MetaWeatherFetcher();
  return fetcher.fetchWeather(woeid);
};
