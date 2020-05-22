import { useSelector } from 'react-redux';
import { getWeathers } from 'containers/HomePage/selectors';

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
