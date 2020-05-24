import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import debounce from 'lodash/fp/debounce';
import get from 'lodash/fp/get';

import useActions from 'hooks/useActions';
import { searchLocationAction, changeCurrentLocationAction } from './actions';
import { getLocations } from './selectors';

export const useHooks = () => {
  /**
   * Selectors
   */
  const locations = useSelector(getLocations);
  let optionLocations = [];
  if (get('data', locations) && get('data.length', locations) > 0) {
    optionLocations = get('data', locations).map(item => ({
      label: item.title,
      value: item.woeid,
    }));
  }

  /**
   * Actions
   */
  const { searchLocation, changeCurrentLocation } = useActions(
    {
      searchLocation: searchLocationAction,
      changeCurrentLocation: changeCurrentLocationAction,
    },
    [],
  );

  /**
   * Handler
   */
  const onSearchChangeHandler = useCallback(
    debounce(500, value => {
      if (value) searchLocation(value);
    }),
    [],
  );

  const onLocationChangeHandler = useCallback(({ value }) => {
    changeCurrentLocation(value);
  }, []);

  return {
    selectors: {
      locations,
      optionLocations,
    },
    handlers: {
      onSearchChangeHandler,
      onLocationChangeHandler,
    },
  };
};

export default useHooks;
