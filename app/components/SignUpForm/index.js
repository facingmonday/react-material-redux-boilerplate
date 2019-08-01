
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import {
  TextField,
  Button,
} from '@material-ui/core';

class SignUp extends Component {
  onSubmit = (values) => {
    this.props.register(values);
  }
  renderError = (user) => {
    if (user && user.error && user.error.message) {
      return (
        <div className="alert alert-danger">
          { user.error.message ? user.error.message : 'Something went wrong'}
        </div>
      );
    }
    return null;
  }

  render() {
    const { handleSubmit, submitting, user } = this.props;
    if (this.props.user.authenticated) {
      return (<Redirect to="/" />);
    }
    return (
      <div>
        {this.renderError(user)}
        <form onSubmit={this.onSubmit}>
          <TextField
            name="email"
            label="Email"
            type="text"
          />
          <TextField
            name="password"
            type="password"
            label="Password"
          />
          <TextField
            name="confirmPassword"
            type="password"
            label="Confirm"
          />
          <Button variant={'primary'} onClick={this.onSubmit}>Sign Up</Button>
        </form>
        <a href="/auth/facebook" className="btn btn-primary"><span className="fa fa-facebook"></span> Facebook</a>
      </div>
    );
  }
}

export default SignUp;
