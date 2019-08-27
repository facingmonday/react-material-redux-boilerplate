import React from 'react';
import { shallow } from 'enzyme';
import Search from './Search';

describe('<Search />', () => {
  it('Renders component', () => {
    const component = shallow(<Search />);
    expect(component).toHaveLength(1);
  });
});
