/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.home || initialState;

const getLocations = createSelector(
  selectHome,
  homeState => homeState.location,
);

const getWeathers = createSelector(
  selectHome,
  homeState => homeState.weather,
);

const getCurrentLocation = createSelector(
  selectHome,
  homeState => homeState.currentLocation,
);

export { selectHome, getLocations, getWeathers, getCurrentLocation };
