import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import {
  Grid,
  TextField,
  Button,
  FormControl,
  Typography,
  withStyles,
} from '@material-ui/core';

const styles = () => ({
  loginWrapper: {
    marginTop: '100px',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  wrapperLogin: {
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    minWidth: 275,
  },
});

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
        <div className="alert alert-danger">
          {user.error.message ? user.error.message : 'Something went wrong'}
        </div>
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
          <Typography variant="h4">Login</Typography>
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
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.onSubmit}
                >
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

LoginForm.propTypes = {
  handleSubmit: PropTypes.func,
  submitting: PropTypes.bool,
  auth: PropTypes.shape,
  login: PropTypes.func,
};

export default withStyles(styles)(LoginForm);
