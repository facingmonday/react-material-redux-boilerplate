import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { loginUser } from '../actions/auth';

import Account from '../components/AccountPage';
import { selectAuthObject } from '../selectors/auth';

const mapStateToProps = createStructuredSelector({
  auth: selectAuthObject(),
});

const mapDispatchToProps = dispatch => ({
  login: data => dispatch(loginUser(data)),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Account),
);
