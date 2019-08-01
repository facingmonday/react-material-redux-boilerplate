import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Button,
  withStyles,
} from '@material-ui/core';

const styles = (theme) => ({

});

class ClientPage extends Component {
  componentDidMount() {
    this.props.fetchClient(this.props.match.params.id);
  }
  render() {
    const { classes, client } = this.props;
    if (client && client.client) {
      return (
        <Grid container className={classes.container}>
          <Grid item xs={12}>
            Client Page
            <h4>Client: {client.client.fingerprint}</h4>
          </Grid>
        </Grid>
      );
    }

    return null;
  }
}

export default withStyles(styles)(ClientPage);
