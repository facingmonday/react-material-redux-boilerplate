import React from 'react';
import { shallow } from 'enzyme';
import UsersPage from './UsersPage';

describe('<UsersPage />', () => {
  it('Renders component', () => {
    const component = shallow(<UsersPage />);
    expect(component).toHaveLength(1);
  });
});
