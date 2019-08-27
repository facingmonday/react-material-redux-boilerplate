import { FETCH_DASHBOARD, FETCH_DASHBOARD_SUCCESS, FETCH_DASHBOARD_FAILURE } from '../constants/dashboard';

export function fetchDashboard(dashboardId) {
  return {
    type: FETCH_DASHBOARD,
    dashboardId,
  };
}
export function fetchDashboardSuccess(dashboard) {
  return {
    type: FETCH_DASHBOARD_SUCCESS,
    dashboard,
  };
}
export function fetchDashboardFailure(error) {
  return {
    type: FETCH_DASHBOARD_FAILURE,
    error,
  };
}
