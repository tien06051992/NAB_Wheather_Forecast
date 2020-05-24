import { useEffect } from 'react';

import useActions from 'hooks/useActions';
import { useSelector } from 'react-redux';
import { getWeathers, getCurrentLocation } from 'containers/HomePage/selectors';
import { searchWeatherAction } from './actions';

export const useInit = () => {
  /**
   * Selector
   */
  const currentLocation = useSelector(getCurrentLocation);

  /**
   * Action
   */
  const { searchWeather } = useActions(
    {
      searchWeather: searchWeatherAction,
    },
    [],
  );

  useEffect(() => {
    if (currentLocation) searchWeather(currentLocation);
  }, [currentLocation]);
};

export const useHooks = () => {
  /**
   * Selectors
   */
  const weathers = useSelector(getWeathers);

  return {
    selectors: {
      weathers,
    },
  };
};

export default useHooks;
