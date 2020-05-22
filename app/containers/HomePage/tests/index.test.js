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

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <HomePage loading={false} error={false} repos={[]} />
        </IntlProvider>
      </Provider>,
    );
    expect(firstChild).toMatchSnapshot();
  });

  it('should fetch the repos on mount if a username exists', () => {
    const submitSpy = jest.fn();
    render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <HomePage
            username="Not Empty"
            onChangeUsername={() => {}}
            onSubmitForm={submitSpy}
          />
        </IntlProvider>
      </Provider>,
    );
    expect(submitSpy).toHaveBeenCalled();
  });

  it('should not call onSubmitForm if username is an empty string', () => {
    const submitSpy = jest.fn();
    render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <HomePage onChangeUsername={() => {}} onSubmitForm={submitSpy} />
        </IntlProvider>
      </Provider>,
    );
    expect(submitSpy).not.toHaveBeenCalled();
  });

  it('should not call onSubmitForm if username is null', () => {
    const submitSpy = jest.fn();
    render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <HomePage
            username=""
            onChangeUsername={() => {}}
            onSubmitForm={submitSpy}
          />
        </IntlProvider>
      </Provider>,
    );
    expect(submitSpy).not.toHaveBeenCalled();
  });
});