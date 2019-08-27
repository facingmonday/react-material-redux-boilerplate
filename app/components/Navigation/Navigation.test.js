import React from 'react';
import { shallow } from 'enzyme';
import { ThemeProvider } from '@material-ui/styles';
import Navigation from './Navigation';
import theme from '../../theme';

describe('<Navigation />', () => {
  it('Renders component', () => {
    const component = shallow(
      <ThemeProvider theme={theme}>
        <Navigation />
      </ThemeProvider>,
    );
    expect(component).toHaveLength(1);
  });
});
