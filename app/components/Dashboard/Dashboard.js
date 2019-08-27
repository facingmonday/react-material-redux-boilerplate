import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, CircularProgress, Typography } from '@material-ui/core';
import Error from '../Error';


class Dashboard extends Component {
  static propTypes = {
    fetchDashboard: PropTypes.func,
    dashboard: PropTypes.object,
  };

  componentDidMount() {
    this.props.fetchDashboard();
  }

  render() {
    const { loading, error, dashboard } = this.props;

    if (loading) {
      return <CircularProgress />;
    }
    if (error) {
      return <Error message="Error getting dashboard" />;
    }
    return (
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <Typography variant="h1" />
        </Grid>
      </Grid>
    );
  }
}

Dashboard.defaultProps = {
  dashboard: {},
  fetchDashboard: () => null,
};

export default Dashboard;
