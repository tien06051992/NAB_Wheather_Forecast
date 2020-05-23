/**
 * Test the HomePage
 */

import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';

import { HomePage } from '../index';
import configureStore from '../../../configureStore';

describe('<HomePage />', () => {
  let store;
  let intl;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
    intl = {
      formatMessage: jest.fn(),
    };
  });

  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <HomePage intl={intl} />
        </IntlProvider>
      </Provider>,
    );
    expect(firstChild).toMatchSnapshot();
  });
});
