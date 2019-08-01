import { createSelector } from 'reselect';

const dashboardSelector = state => state.dashboard;

export const selectDashboardLoading = () => createSelector(
  dashboardSelector,
  dashboard => dashboard.loading,
);

export const selectDashboardError = () => createSelector(
  dashboardSelector,
  dashboard => dashboard.error,
);

export const selectDashboard = () => createSelector(
  dashboardSelector,
  dashboard => dashboard.dashboard,
);
