import React from 'react';
import PropTypes from 'prop-types';
import { Grid, FormControl, TextField, withStyles } from '@material-ui/core';
import styles from './PasswordReset.styles';

const PasswordReset = ({ classes, onSubmit }) => (
  <div className={classes.passwordReset}>
    <form onSubmit={onSubmit}>
      <Grid container>
        <FormControl>
          <TextField name="email" placeholder="Email" margin="normal" variant="outlined" />
        </FormControl>
      </Grid>
    </form>
  </div>
);
PasswordReset.defaultProps = {};
PasswordReset.propTypes = {
  classes: PropTypes.object,
  onSubmit: PropTypes.func,
};

export default withStyles(styles)(PasswordReset);
