import React from 'react';
import { shallow } from 'enzyme';
import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
  it('Renders component', () => {
    const component = shallow(<Dashboard />);
    expect(component).toHaveLength(1);
  });
});
