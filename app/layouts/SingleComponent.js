import React from 'react';
import { withRouter } from 'react-router-dom';
import { HashRouter, Switch, Redirect, Route } from 'react-router-dom';
import {
  Grid,
} from '@material-ui/core';

const SingleComponent = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={matchProps => (
      <Grid container>
        <Grid item xs={4} />
        <Grid item xs={4}>
          <Component {...matchProps} />
        </Grid>
        <Grid item xs={4} />
      </Grid>
    )}
  />
);

export default withRouter(SingleComponent);
