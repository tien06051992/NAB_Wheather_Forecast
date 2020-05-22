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

export { selectHome, getLocations, getWeathers };
