import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import {
  Grid,
  FormControlLabel,
  Checkbox,
  TextField,
  Button,
  FormControl,
  Typography,
  withStyles,
} from '@material-ui/core';

import styles from './LoginForm.styles';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
  };

  onSubmit = () => {
    this.props.login(this.state);
  };

  renderError = user => {
    if (user && user.error && user.error.message) {
      return (
        <div className="alert alert-danger">{user.error.message ? user.error.message : 'Something went wrong'}</div>
      );
    }
    return <span />;
  };

  render() {
    const { auth, classes } = this.props;
    if (auth.user && auth.authenticated) {
      return <Redirect to="/" />;
    }
    return (
      <Grid direction="verticle" alignItems="center" alignContent="center" container className={classes.loginForm}>
        <Grid item xs={12} className={classes.errorContainer}>
          {auth.error ? this.renderError(auth.error) : null}
        </Grid>
        <Grid item xs={12} className={classes.loginContainer}>
          <Typography className={classes.header} variant="h4">
            Login
          </Typography>
          <form className="form" onSubmit={this.onSubmit}>
            <Grid container>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <TextField
                    name="email"
                    placeholder="Email"
                    onChange={e => this.setState({ email: e.target.value })}
                    value={this.state.email}
                    margin="normal"
                    variant="outlined"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <TextField
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={e => this.setState({ password: e.target.value })}
                    value={this.state.password}
                    margin="normal"
                    variant="outlined"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Grid container>
                  <Grid item xs={6}>
                    <FormControlLabel
                      control={<Checkbox checked onChange={this.handleRememberMe} value="remember_me" />}
                      label="Remember Me ?"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Button variant="contained" color="primary" onClick={this.onSubmit}>
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Typography align="center">Don't have an account? Sign up</Typography>
              </Grid>
            </Grid>
          </form>
        </Grid>
        <Link to="/signup">Sign up</Link>
      </Grid>
    );
  }
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func,
  submitting: PropTypes.bool,
  auth: PropTypes.any,
  login: PropTypes.func,
  classes: PropTypes.object,
};

export default withStyles(styles)(LoginForm);
