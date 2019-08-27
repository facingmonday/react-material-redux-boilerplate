import React from 'react';
import { shallow } from 'enzyme';
import { CircularProgress } from '@material-ui/core';
import AccountPage from './AccountPage';
import Error from '../Error';

describe('<AccountPage />', () => {
  it('Renders component', () => {
    const component = shallow(<AccountPage user={{}} classes={{}} />);
    expect(component).toHaveLength(1);
  });
  it('Should render loading', () => {
    const comp = shallow(<AccountPage classes={{}} user={{ user: null, loading: true, error: null }} />);
    expect(comp.find(CircularProgress)).toHaveLength(1);
  });
  it('Should render Error', () => {
    const comp = shallow(
      <AccountPage classes={{}} user={{ user: null, loading: false, error: 'Something went wrong' }} />,
    );
    expect(comp.find(Error)).toHaveLength(1);
  });
});
