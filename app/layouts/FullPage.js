import React from 'react';
import { withRouter, Route } from 'react-router-dom';
import {
  Grid,
} from '@material-ui/core';
import Header from '../containers/Header';

const FullPage = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={matchProps => (
      <Grid container>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12}>
          <Component {...matchProps} />
        </Grid>
      </Grid>
    )}
  />
);

export default withRouter(FullPage);
