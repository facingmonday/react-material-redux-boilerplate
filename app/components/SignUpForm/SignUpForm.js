import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { Grid, TextField, Button, FormControl, withStyles } from '@material-ui/core';

import styles from './SignUpForm.styles';

class SignupForm extends Component {
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
      <Grid container className={classes.loginWrapper}>
        <Grid item xs={12}>
          {auth.error ? this.renderError(auth.error) : null}
        </Grid>
        <Grid item xs={12}>
          <h4>Login</h4>
          <form className="form" onSubmit={this.onSubmit}>
            <Grid container>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <TextField
                    name="email"
                    placeholder="email"
                    onChange={e => this.setState({ email: e.target.value })}
                    value={this.state.email}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <TextField
                    name="password"
                    type="password"
                    placeholder="password"
                    onChange={e => this.setState({ password: e.target.value })}
                    value={this.state.password}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" color="primary" onClick={this.onSubmit}>
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
        <Link to="/signup">Sign up</Link>
      </Grid>
    );
  }
}

SignupForm.propTypes = {
  handleSubmit: PropTypes.func,
  submitting: PropTypes.bool,
  auth: PropTypes.any,
  login: PropTypes.func,
  classes: PropTypes.object,
};

export default withStyles(styles)(SignupForm);
