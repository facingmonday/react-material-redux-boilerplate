import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Route } from 'react-router-dom';

import { Grid } from '@material-ui/core';

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

SingleComponent.propTypes = {
  component: PropTypes.object,
};
export default withRouter(SingleComponent);
