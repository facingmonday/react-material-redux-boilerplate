import Dashboard from '.';

export default {
  name: 'Dashboard',
  component: Dashboard,
  props: {
    loading: false,
    error: false,
    dashboard: {},
    fetchDashboard: () => null,
  },
};
