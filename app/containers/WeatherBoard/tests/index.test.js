/**
 * Test the HomePage
 */

import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';
import '@testing-library/jest-dom';

import useHooks from '../hooks';
import { WeatherBoard } from '../index';
import configureStore from '../../../configureStore';

jest.mock('../hooks');

describe('<WeatherBoard />', () => {
  let store;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  it('should render list', async () => {
    useHooks.mockClear();
    useHooks.mockImplementation(() => ({
      selectors: {
        weathers: {
          status: 'SUCCESS',
          data: [{ id: 1 }, { id: 2 }],
        },
      },
    }));
    const { getAllByText } = render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <WeatherBoard />
        </IntlProvider>
      </Provider>,
    );
    const result = await getAllByText('Min:');
    expect(result.length).toEqual(2);
  });

  it('should render with something wrong message', () => {
    useHooks.mockClear();
    useHooks.mockImplementation(() => ({
      selectors: {
        weathers: {
          status: 'FAILED',
          data: null,
        },
      },
    }));
    const { getByText } = render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <WeatherBoard />
        </IntlProvider>
      </Provider>,
    );
    expect(
      getByText('Something went wrong, please choose another city'),
    ).toBeInTheDocument();
  });

  it('should render with loading message', () => {
    useHooks.mockClear();
    useHooks.mockImplementation(() => ({
      selectors: {
        weathers: {
          status: 'PENDING',
          data: null,
        },
      },
    }));
    const { getByText } = render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <WeatherBoard />
        </IntlProvider>
      </Provider>,
    );
    expect(getByText('System is predicting weather...')).toBeInTheDocument();
  });

  it('should render emptyu when have no status', () => {
    useHooks.mockClear();
    useHooks.mockImplementation(() => ({
      selectors: {
        weathers: {
          status: null,
          data: null,
        },
      },
    }));
    const { container } = render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <WeatherBoard />
        </IntlProvider>
      </Provider>,
    );
    expect(container.firstChild).toEqual(null);
  });
});
