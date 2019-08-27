import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

import Navigation from '../components/Navigation';
import { selectNavigation } from '../selectors/auth';

const mapStateToProps = createStructuredSelector({
  navigation: selectNavigation(),
});

const withConnect = connect(mapStateToProps);

export default compose(
  withConnect,
  withRouter,
)(Navigation);
