import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { fetchUsers } from '../actions/user';
import { selectUsers } from '../selectors/user';

import Users from '../components/UsersPage';

Users.propTypes = {
  fetchUsers: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  users: selectUsers(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
)(Users);
