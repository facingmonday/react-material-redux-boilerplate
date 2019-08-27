import React from 'react';
import { shallow } from 'enzyme';
import PasswordReset from './PasswordReset';

describe('<PasswordReset />', () => {
  it('Renders component', () => {
    const component = shallow(<PasswordReset />);
    expect(component).toHaveLength(1);
  });
});
