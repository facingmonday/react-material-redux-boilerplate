import React from 'react';
import { shallow } from 'enzyme';
import Error from './Error';

describe('<Error />', () => {
  it('Renders component', () => {
    const component = shallow(<Error />);
    expect(component).toHaveLength(1);
  });
});
