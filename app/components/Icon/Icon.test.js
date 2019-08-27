import React from 'react';
import { shallow } from 'enzyme';
import Icon from './Icon';

describe('<Icon />', () => {
  it('Renders component', () => {
    const component = shallow(<Icon />);
    expect(component).toHaveLength(1);
  });
});
