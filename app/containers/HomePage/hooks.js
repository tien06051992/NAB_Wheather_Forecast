import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import debounce from 'lodash/fp/debounce';

import useActions from 'hooks/useActions';
import { searchLocationAction, searchWeatherAction } from './actions';
import { getLocations, getWeathers } from './selectors';

export const useHooks = () => {
  /**
   * Selectors
   */
  const locations = useSelector(getLocations);
  const weathers = useSelector(getWeathers);

  /**
   * Actions
   */
  const { searchLocation } = useActions({
    searchLocation: searchLocationAction,
    searchWeather: searchWeatherAction,
  });

  /**
   * Handler
   */
  const onSearchChangeHandler = useCallback(
    debounce(500, value => {
      value && searchLocation(value);
    }),
    [],
  );

  return {
    selectors: {
      locations,
      weathers,
    },
    handlers: {
      onSearchChangeHandler,
    },
  };
};

export default useHooks;
