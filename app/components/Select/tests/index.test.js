import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import Select from '../index';

const renderer = new ShallowRenderer();

describe('<Select />', () => {
  it('should render and match the snapshot', () => {
    renderer.render(<Select />);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
