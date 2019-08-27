import { FETCH_DASHBOARD, FETCH_DASHBOARD_SUCCESS, FETCH_DASHBOARD_FAILURE } from '../constants/dashboard';

const initialState = {
  dashboard: null,
  error: null,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DASHBOARD:
      return { ...state, loading: true };
    case FETCH_DASHBOARD_SUCCESS:
      return { dashboard: action.dashboard, error: null, loading: false };
    case FETCH_DASHBOARD_FAILURE:
      return { dashboard: null, error: action.error, loading: false };
    default:
      return state;
  }
};
