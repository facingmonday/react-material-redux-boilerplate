import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { fetchUser, updateActiveUser, saveUser, deleteUser } from '../actions/user';

import { selectActiveUser } from '../selectors/user';
import UserPage from '../components/UserPage';

const mapStateToProps = createStructuredSelector({
  user: selectActiveUser(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchUser: userId => dispatch(fetchUser(userId)),
    saveUser: user => dispatch(saveUser(user)),
    updateUser: user => dispatch(updateActiveUser(user)),
    deleteUser: userId => dispatch(deleteUser(userId)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(UserPage);
