import React from 'react';
import { shallow } from 'enzyme';
import TableHeader from './TableHeader';

describe('<TableHeader />', () => {
  it('Renders component', () => {
    const component = shallow(<TableHeader />);
    expect(component).toHaveLength(1);
    throw new Error('Setup test');
  });
});
