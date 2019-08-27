import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { fetchDashboard } from '../actions/dashboard';
import Dashboard from '../components/Dashboard';

import { selectDashboardLoading, selectDashboardError, selectDashboard } from '../selectors/dashboard';

const mapStateToProps = createStructuredSelector({
  loading: selectDashboardLoading(),
  error: selectDashboardError(),
  dashboard: selectDashboard(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchDashboard: () => dispatch(fetchDashboard()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  withRouter,
)(Dashboard);
