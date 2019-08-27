import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

// Actions
import { logoutUser } from '../actions/auth';

// Selectors
import { selectAuthObject } from '../selectors/auth';

// Components
import Header from '../components/Header';

const mapStateToProps = createStructuredSelector({
  auth: selectAuthObject(),
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutUser()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Header);
