// @flow
/*
 * Home Actions
 */
import type Location from 'models/Location';
import type Weather from 'models/Weather';
import {
  SEARCH_LOCATION,
  SEARCH_LOCATION_SUCCESS,
  SEARCH_LOCATION_FAILED,
  SEARCH_WEATHER,
  SEARCH_WEATHER_SUCCESS,
  SEARCH_WEATHER_FAILED,
  CHANGE_CURRENT_LOCATION,
} from './constants';

/**
 * Search location
 */
export function searchLocationAction(location: string) {
  return {
    type: SEARCH_LOCATION,
    location,
  };
}

export function searchLocationSuccessAction(locations: Array<Location>) {
  return {
    type: SEARCH_LOCATION_SUCCESS,
    locations,
  };
}

export function searchLocationFailedAction(error: Error) {
  return {
    type: SEARCH_LOCATION_FAILED,
    error,
  };
}

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

/**
 * Change location
 */
export function changeCurrentLocationAction(woeid: number) {
  return {
    type: CHANGE_CURRENT_LOCATION,
    woeid,
  };
}
