import {
  FETCH_DASHBOARD,
  FETCH_DASHBOARD_SUCCESS,
  FETCH_DASHBOARD_FAILURE,
  FETCH_DASHBOARDS,
  FETCH_DASHBOARDS_SUCCESS,
  FETCH_DASHBOARDS_FAILURE,
  CREATE_DASHBOARD,
  CREATE_DASHBOARD_SUCCESS,
  CREATE_DASHBOARD_FAILURE,
  UPDATE_DASHBOARD,
  UPDATE_DASHBOARD_SUCCESS,
  UPDATE_DASHBOARD_FAILURE,
  DELETE_DASHBOARD,
  DELETE_DASHBOARD_SUCCESS,
  DELETE_DASHBOARD_FAILURE,
} from '../constants/dashboard';

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
export function fetchDashboards(options) {
  return {
    type: FETCH_DASHBOARDS,
    options
  };
}
export function fetchDashboardsSuccess(dashboards) {
  return {
    type: FETCH_DASHBOARDS_SUCCESS,
    dashboards,
  };
}
export function fetchDashboardsFailure(error) {
  return {
    type: FETCH_DASHBOARDS_FAILURE,
    error,
  };
}
export function createDashboard(dashboard) {
  return {
    type: CREATE_DASHBOARD,
    dashboard,
  };
}
export function createDashboardSuccess(dashboard) {
  return {
    type: CREATE_DASHBOARD_SUCCESS,
    dashboard,
  };
}
export function createDashboardFailure(error) {
  return {
    type: CREATE_DASHBOARD_FAILURE,
    error,
  };
}
export function updateDashboard(dashboard) {
  return {
    type: UPDATE_DASHBOARD,
    dashboard,
  };
}
export function updateDashboardSuccess(dashboard) {
  return {
    type: UPDATE_DASHBOARD_SUCCESS,
    dashboard,
  };
}
export function updateDashboardFailure(error) {
  return {
    type: UPDATE_DASHBOARD_FAILURE,
    error,
  };
}
export function deleteDashboard(dashboardId) {
  return {
    type: DELETE_DASHBOARD,
    dashboardId,
  };
}
export function deleteDashboardSuccess(dashboard) {
  return {
    type: DELETE_DASHBOARD_SUCCESS,
    dashboard,
  };
}
export function deleteDashboardFailure(error) {
  return {
    type: DELETE_DASHBOARD_FAILURE,
    error,
  };
}