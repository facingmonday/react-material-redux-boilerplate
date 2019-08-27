import React from 'react';
import { shallow } from 'enzyme';
import LoginForm from './LoginForm';

describe('<LoginForm />', () => {
  it('Renders component', () => {
    const component = shallow(<LoginForm />);
    expect(component).toHaveLength(1);
  });
});
