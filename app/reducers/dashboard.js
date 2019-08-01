import {
  FETCH_DASHBOARD,
  FETCH_DASHBOARD_SUCCESS,
  FETCH_DASHBOARD_FAILURE,
} from '../constants/dashboard';

const initialState = {
  dashboard: null,
  error: null,
  loading: false,
};

export default (state = initialState, action) => {
  let error;
  switch (action.type) {
    case FETCH_DASHBOARD:
      return { ...state, loading: true };
    case FETCH_DASHBOARD_SUCCESS:
      return { dashboard: action.payload, error: null, loading: false };
    case FETCH_DASHBOARD_FAILURE:
      error = action.payload || { message: action.payload.message };
      return { dashboard: null, error, loading: false };
    default:
      return state;
  }
}
