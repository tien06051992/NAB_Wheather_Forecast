import { renderHook } from '@testing-library/react-hooks';
import useActions from 'hooks/useActions';

import useHooks from '../hooks';

jest.mock('hooks/useActions');

jest.mock('react-redux', () => ({
  useSelector: jest.fn(() => false),
}));

describe('useHooks', () => {
  it('render hooks', () => {
    const searchLocation = jest.fn();
    const changeCurrentLocation = jest.fn();
    useActions.mockClear();
    useActions.mockImplementation(() => ({
      searchLocation,
      changeCurrentLocation,
    }));
    const { result } = renderHook(() => useHooks());
    expect(result.current.selectors.locations).toEqual(false);
  });
});
