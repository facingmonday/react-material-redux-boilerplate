import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('<Header />', () => {
  it('Renders component', () => {
    const component = shallow(<Header />);
    expect(component).toHaveLength(1);
  });
});
