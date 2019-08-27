import React from 'react';
import { shallow } from 'enzyme';
import DataGrid from './DataGrid';

describe('<DataGrid />', () => {
  it('Renders component', () => {
    const component = shallow(<DataGrid />);
    expect(component).toHaveLength(1);
    expect(false).toBeTruthy();
  });
});
