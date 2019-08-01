import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import {
  CircularProgress,
} from '@material-ui/core';
import { connect } from 'react-redux';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';

// Layouts
import FullPage from '../layouts/FullPage';
import SingleComponent from '../layouts/SingleComponent';

// Containers
import Dashboard from './Dashboard';
import Login from './Login';
import SignUp from './SignUp';
import Account from './Account';
import User from './User';
import Users from './Users';

import {
  selectAuthObject,
} from '../selectors/auth';
import {
  fetchMe,
} from '../actions/auth';
import { getCookie, setCookie, deleteCookie } from '../utils/cookie';

class App extends Component {
  componentWillMount() {
    const cookie = getCookie('tf-auth');
    this.props.fetchMe(cookie);
  }
  authorizedRoute(HOComponent) {
    return (HOComponent);
  }
  render() {
    return (
      <div className={'app-container'}>
        <Switch>
          <SingleComponent exact path={'/login'} component={Login} />
          <SingleComponent exact path={'/signup'} component={SignUp} />
          <FullPage exact path={'/'} component={Dashboard} />
          <FullPage exact path={'/account'} component={Account} />
          <FullPage exact path={'/users'} component={Users} />
          <FullPage exact path={'/user/:id'} component={User} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  auth: selectAuthObject(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchMe: () => dispatch(fetchMe()),
  };
}

App.propTypes = {
  fetchMe: PropTypes.func,
  auth: PropTypes.shape,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
