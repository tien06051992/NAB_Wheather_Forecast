import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import { WeatherItem } from '../index';

const renderer = new ShallowRenderer();

describe('<WeatherItem />', () => {
  it('should render and match the snapshot', () => {
    const intl = {
      formatMessage: jest.fn(),
    };

    const weather = {
      applicableDate: '05-23-2020',
      minTemp: 28,
      maxTemp: 30,
    };
    renderer.render(<WeatherItem intl={intl} weather={weather} />);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
