import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import debounce from 'lodash/fp/debounce';
import map from 'lodash/fp/map';

import useActions from 'hooks/useActions';
import { searchLocationAction, changeCurrentLocationAction } from './actions';
import { getLocations, getWeathers } from './selectors';

export const useHooks = () => {
  /**
   * Selectors
   */
  const locations = useSelector(getLocations);
  const optionLocations = map(
    item => ({
      label: item.title,
      value: item.woeid,
    }),
    locations.data,
  );

  /**
   * Actions
   */
  const { searchLocation, changeCurrentLocation } = useActions({
    searchLocation: searchLocationAction,
    changeCurrentLocation: changeCurrentLocationAction,
  });

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
  console.log('dzo');
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
