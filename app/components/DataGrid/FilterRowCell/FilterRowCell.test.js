import React from 'react';
import { shallow } from 'enzyme';
import FilterRowCell from './FilterRowCell';

describe('<FilterRowCell />', () => {
  it('Renders component', () => {
    const component = shallow(<FilterRowCell />);
    expect(component).toHaveLength(1);
  });
});
