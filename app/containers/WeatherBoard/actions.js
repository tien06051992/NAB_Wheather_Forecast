// @flow
/*
 * Home Actions
 */
import type Weather from 'models/Weather';
import {
  SEARCH_WEATHER,
  SEARCH_WEATHER_SUCCESS,
  SEARCH_WEATHER_FAILED,
} from './constants';

/**
 * Search weather
 */
export function searchWeatherAction(woeid: number) {
  return {
    type: SEARCH_WEATHER,
    woeid,
  };
}

export function searchWeatherSuccessAction(weathers: Array<Weather>) {
  return {
    type: SEARCH_WEATHER_SUCCESS,
    weathers,
  };
}

export function searchWeatherFailedAction(error: Error) {
  return {
    type: SEARCH_WEATHER_FAILED,
    error,
  };
}
