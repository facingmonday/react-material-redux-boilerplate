import React from 'react';
import { shallow } from 'enzyme';
import Cell from './Cell';

describe('<Cell />', () => {
  it('Renders component', () => {
    const component = shallow(<Cell />);
    expect(component).toHaveLength(1);
  });
});
