import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  withStyles,
} from '@material-ui/core';

const styles = () => ({
  container: {
    display: 'flex',
    flex: 1,
  },
});

class UserPage extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.container}>
        <h1>User</h1>
      </Grid>
    );
  }
}
UserPage.defaultProps = {

};
UserPage.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(UserPage);
