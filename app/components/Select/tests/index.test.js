import React from 'react';
import { render } from 'react-testing-library';
import Select from 'react-select';
import SelectWrapped from '../index';

describe('<Tooltip />', () => {
  const renderedComponent = render(<SelectWrapped />);

  it('should be AntTooltip', () => {
    expect(renderedComponent.find(Select).length).toBe(1);
  });
});
