import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { saveUser } from '../actions/user';
import SignUpForm from '../components/SignUpForm';

const mapStateToProps = state => ({
  user: state.user.loggedInUser,
});

const mapDispatchToProps = dispatch => ({
  register: data => dispatch(saveUser(data)),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(SignUpForm),
);
