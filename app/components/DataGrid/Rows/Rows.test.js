import React from 'react';
import { shallow } from 'enzyme';
import Rows from './Rows';

describe('<Rows />', () => {
  it('Renders component', () => {
    const component = shallow(<Rows />);
    expect(component).toHaveLength(1);
  });
});
