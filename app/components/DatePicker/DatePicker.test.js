import React from 'react';
import { shallow } from 'enzyme';
import DatePicker from './DatePicker';

describe('<DatePicker />', () => {
  it('Renders component', () => {
    const component = shallow(<DatePicker />);
    expect(component).toHaveLength(1);
  });
});
