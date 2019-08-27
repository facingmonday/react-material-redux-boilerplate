import React from 'react';
import { shallow } from 'enzyme';
import Logo from './Logo';
import logoImage from '../../../assets/images/logo.png';

describe('<Logo />', () => {
  it('Renders an image', () => {
    const logo = shallow(<Logo />);

    expect(logo.find('img').prop('src')).toEqual(logoImage);
  });
});
