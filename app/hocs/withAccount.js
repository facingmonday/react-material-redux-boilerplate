import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

// Import the selectors and actions that will be mapped the props
// of the passed component

import {
  selectAuthObject,
} from '../selectors/auth';
import {
  loginUser,
} from '../actions/user';

const mapStateToProps = createStructuredSelector({
  auth: selectAuthObject(),
});
const mapDispatchToProps = dispatch => ({
  login: data => dispatch(loginUser(data)),
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withAccount = Component => props => <Component {...props} />;

const wrappedComponent = compose(
  withConnect,
  withRouter,
  withAccount,
);

export default wrappedComponent;