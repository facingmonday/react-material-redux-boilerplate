import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';

// Layouts
import { FullPage, SingleComponent } from '../components/Layouts';

// Containers
import Dashboard from './Dashboard';
import Login from './Login';
import SignUp from './SignUp';
import Account from './Account';
import User from './User';
import Users from './Users';

import { selectAuthObject } from '../selectors/auth';
import { fetchMe } from '../actions/auth';
import { getCookie } from '../utils';

class App extends Component {
  componentDidMount() {
    const cookie = getCookie('tf-auth');
    this.props.fetchMe(cookie);
  }

  render() {
    return (
      <div className="app-container">
        <Switch>
          <SingleComponent exact path="/login" component={Login} />
          <SingleComponent exact path="/signup" component={SignUp} />
          <FullPage exact path="/" component={Dashboard} />
          <FullPage exact path="/profile" component={Account} />
          <FullPage exact path="/account" component={Account} />
          <FullPage exact path="/settings" component={Account} />
          <FullPage exact path="/users" component={Users} />
          <FullPage exact path="/users/create" component={User} />
          <FullPage exact path="/users/:id" component={User} />
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
  auth: PropTypes.any,
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(App),
);
