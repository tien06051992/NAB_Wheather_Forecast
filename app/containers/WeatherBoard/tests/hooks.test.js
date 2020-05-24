import { renderHook } from '@testing-library/react-hooks';
import { useSelector } from 'react-redux';
import useActions from 'hooks/useActions';

import useHooks, { useInit } from '../hooks';

jest.mock('hooks/useActions');

jest.mock('react-redux', () => ({
  useSelector: jest.fn(() => false),
}));

describe('useHooks', () => {
  it('render hooks', () => {
    const searchWeather = jest.fn();
    const weathers = [{ id: 1 }, { id: 2 }];
    useSelector.mockClear();
    useSelector.mockImplementation(() => weathers);
    useActions.mockClear();
    useActions.mockImplementation(() => ({
      searchWeather,
    }));
    const { result } = renderHook(() => useHooks());
    expect(result.current.selectors.weathers).toEqual(weathers);
  });
});

describe('useInit', () => {
  it('render hooks with call currentLocation', () => {
    const searchWeather = jest.fn();
    useSelector.mockClear();
    useSelector.mockReturnValueOnce(123).mockReturnValueOnce(null);
    useActions.mockClear();
    useActions.mockImplementation(() => ({
      searchWeather,
    }));
    renderHook(() => useInit());
    expect(searchWeather).toHaveBeenCalled();
  });

  it('render hooks with no call searchWeather', () => {
    const searchWeather = jest.fn();
    useSelector.mockClear();
    useSelector.mockReturnValueOnce(null);
    useActions.mockClear();
    useActions.mockImplementation(() => ({
      searchWeather,
    }));
    renderHook(() => useInit());
    expect(searchWeather).not.toHaveBeenCalled();
  });
});
