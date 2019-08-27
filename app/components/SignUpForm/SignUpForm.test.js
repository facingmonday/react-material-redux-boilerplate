import React from 'react';
import { shallow } from 'enzyme';
import SignUpForm from './SignUpForm';

describe('<SignUpForm />', () => {
  it('Renders component', () => {
    const component = shallow(<SignUpForm />);
    expect(component).toHaveLength(1);
  });
});
