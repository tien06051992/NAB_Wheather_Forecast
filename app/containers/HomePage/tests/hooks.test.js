import { renderHook, act } from '@testing-library/react-hooks';
import { useSelector } from 'react-redux';
import debounce from 'lodash/fp/debounce';

import useActions from 'hooks/useActions';
import useHooks from '../hooks';

jest.useFakeTimers();
jest.mock('hooks/useActions');
jest.mock('react-redux', () => ({
  useSelector: jest.fn(() => false),
}));
jest.mock('lodash/fp/debounce');

describe('useHooks', () => {
  it('return locations', () => {
    const searchLocation = jest.fn();
    const changeCurrentLocation = jest.fn();
    const locations = {
      status: 'SUCCESS',
      data: [{ id: 1 }, { id: 2 }],
    };
    debounce.mockImplementation((_, fn) => fn);
    useSelector.mockClear();
    useSelector.mockImplementation(() => locations);
    useActions.mockClear();
    useActions.mockImplementation(() => ({
      searchLocation,
      changeCurrentLocation,
    }));
    const { result } = renderHook(() => useHooks());
    expect(result.current.selectors.locations).toEqual(locations);
  });

  it('searchLocation should be called', () => {
    const searchLocation = jest.fn();
    const changeCurrentLocation = jest.fn();
    const locations = {
      status: 'SUCCESS',
      data: [{ id: 1 }, { id: 2 }],
    };
    debounce.mockImplementation((_, fn) => fn);
    useSelector.mockClear();
    useSelector.mockImplementation(() => locations);
    useActions.mockClear();
    useActions.mockImplementation(() => ({
      searchLocation,
      changeCurrentLocation,
    }));
    const { result } = renderHook(() => useHooks());
    act(() => {
      result.current.handlers.onSearchChangeHandler('dummy city');
      jest.runAllTimers();
    });
    expect(searchLocation).toHaveBeenCalled();
  });

  it('searchLocation should not be called', () => {
    const searchLocation = jest.fn();
    const changeCurrentLocation = jest.fn();
    const locations = {
      status: 'SUCCESS',
      data: [{ id: 1 }, { id: 2 }],
    };
    debounce.mockImplementation((_, fn) => fn);
    useSelector.mockClear();
    useSelector.mockImplementation(() => locations);
    useActions.mockClear();
    useActions.mockImplementation(() => ({
      searchLocation,
      changeCurrentLocation,
    }));
    const { result } = renderHook(() => useHooks());
    act(() => {
      result.current.handlers.onSearchChangeHandler();
      jest.runAllTimers();
    });
    expect(searchLocation).not.toHaveBeenCalled();
  });

  it('changeCurrentLocation should be called', () => {
    const searchLocation = jest.fn();
    const changeCurrentLocation = jest.fn();
    const locations = {
      status: 'SUCCESS',
      data: [{ id: 1 }, { id: 2 }],
    };
    debounce.mockImplementation((_, fn) => fn);
    useSelector.mockClear();
    useSelector.mockImplementation(() => locations);
    useActions.mockClear();
    useActions.mockImplementation(() => ({
      searchLocation,
      changeCurrentLocation,
    }));
    const { result } = renderHook(() => useHooks());
    act(() => {
      result.current.handlers.onLocationChangeHandler({ value: 'dummy city' });
    });

    expect(changeCurrentLocation).toHaveBeenCalled();
  });
});
