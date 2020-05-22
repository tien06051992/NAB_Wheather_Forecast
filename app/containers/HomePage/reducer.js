/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { STATUS } from 'utils/constants';
import {
  SEARCH_LOCATION,
  SEARCH_LOCATION_SUCCESS,
  SEARCH_LOCATION_FAILED,
  SEARCH_WEATHER,
  SEARCH_WEATHER_SUCCESS,
  SEARCH_WEATHER_FAILED,
} from './constants';

// The initial state of the App
export const initialState = {
  location: {
    data: null,
    status: null,
  },
  weather: {
    data: null,
    status: null,
  },
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      /**
       * Location
       */
      case SEARCH_LOCATION: {
        draft.location.status = STATUS.PENDING;
        break;
      }

      case SEARCH_LOCATION_SUCCESS: {
        const { locations } = action;
        draft.location.status = STATUS.SUCCESS;
        draft.location.data = locations;
        break;
      }

      case SEARCH_LOCATION_FAILED: {
        const { error } = action;
        draft.location.status = STATUS.FAILED;
        draft.location.error = error;
        draft.location.data = null;
        break;
      }

      /**
       * Weather
       */
      case SEARCH_WEATHER: {
        draft.weather.status = STATUS.PENDING;
        break;
      }

      case SEARCH_WEATHER_SUCCESS: {
        const { weathers } = action;
        draft.weather.status = STATUS.SUCCESS;
        draft.weather.data = weathers;
        break;
      }

      case SEARCH_WEATHER_FAILED: {
        const { error } = action;
        draft.weather.status = STATUS.FAILED;
        draft.weather.error = error;
        draft.weather.data = null;
        break;
      }
    }
  });

export default homeReducer;
