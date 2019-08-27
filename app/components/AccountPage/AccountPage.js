import React from 'react';
import PropTypes from 'prop-types';
import { Grid, CircularProgress, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Error from '../Error';
import styles from './AccountPage.style';

const useStyles = makeStyles(styles);

const AccountPage = ({ user: { user, loading, error } }) => {
  const classes = useStyles();
  if (loading) {
    return <CircularProgress />;
  }
  if (error) {
    return <Error message={error} />;
  }
  if (!user) {
    return (
      <Grid container className={classes.container}>
        <Grid xs={12}>
          <Typography variant="error">User Not Found</Typography>
        </Grid>
      </Grid>
    );
  }
  return (
    <Grid container className={classes.container}>
      <Grid xs={12}>
        <Typography variant="h1">Account</Typography>
      </Grid>
    </Grid>
  );
};
AccountPage.defaultProps = {
  user: {},
};
AccountPage.propTypes = {
  user: PropTypes.object,
};

export default AccountPage;
