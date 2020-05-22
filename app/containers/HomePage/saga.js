/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest, all, fork } from 'redux-saga/effects';
import MetaWeatherFetcher from 'fetchers/MetaWeatherFetcher';
import {
  searchLocationSuccessAction,
  searchLocationFailedAction,
  searchWeatherSuccessAction,
  searchWeatherFailedAction,
} from 'containers/HomePage/actions';

import request from 'utils/request';
import { makeSelectUsername } from 'containers/HomePage/selectors';
import {
  SEARCH_LOCATION,
  SEARCH_LOCATION_SUCCESS,
  SEARCH_LOCATION_FAILED,
  SEARCH_WEATHER,
  SEARCH_WEATHER_SUCCESS,
  SEARCH_WEATHER_FAILED,
} from './constants';

/**
 * Home saga
 */
export default function* saga() {
  yield all([fork(searchLocationWatcher)]);
}

export function* searchLocationWatcher() {
  yield takeLatest(SEARCH_LOCATION, searchLocationTask);
}

/**
 * Search location request/response handler
 */
export function* searchLocationTask(action) {
  const { location } = action;

  const { response, error } = yield call(searchLocationFetcher, location);
  console.log(response, error);
  if (response) {
    yield put(searchLocationSuccessAction(response));
  } else {
    yield put(searchLocationFailedAction(error));
  }

  // try {
  //   // Call our request helper (see 'utils/request')
  //   const { response, error } = yield call(request, requestURL);
  //   yield put(reposLoaded(repos, username));
  // } catch (err) {
  //   yield put(repoLoadingError(err));
  // }
}

export const searchLocationFetcher = (location: string) => {
  const fetcher = new MetaWeatherFetcher();
  return fetcher.fetchLocation(location);
};
