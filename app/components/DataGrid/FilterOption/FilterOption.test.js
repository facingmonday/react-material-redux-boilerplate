import React from 'react';
import { shallow } from 'enzyme';
import FilterOption from './FilterOption';

describe('<FilterOption />', () => {
  it('Renders component', () => {
    const component = shallow(<FilterOption />);
    expect(component).toHaveLength(1);
  });
});
