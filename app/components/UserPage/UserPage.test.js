import React from 'react';
import { shallow } from 'enzyme';
import UserPage from './UserPage';

describe('<UserPage />', () => {
  it('Renders component', () => {
    const component = shallow(<UserPage />);
    expect(component).toHaveLength(1);
  });
});
