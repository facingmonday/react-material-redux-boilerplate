import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import { loginUser } from '../actions/auth';
import {
  selectAuthObject,
} from '../selectors/auth';

const mapStateToProps = createStructuredSelector({
  auth: selectAuthObject(),
});

function mapDispatchToProps(dispatch) {
  return {
    login: data => dispatch(loginUser(data)),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm));
