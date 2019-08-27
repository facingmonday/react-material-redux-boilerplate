import { all, call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_DASHBOARD } from '../constants/dashboard';
import { fetchDashboardSuccess, fetchDashboardFailure } from '../actions/dashboard';
import { fetchDashboard as fetchDashboardApi } from '../apis/dashboard';
import { logoutUser } from '../actions/auth';

export function* fetchDashboardSaga() {
  yield takeLatest(FETCH_DASHBOARD, performFetchDashboardAction);
}
function* performFetchDashboardAction(action) {
  try {
    const response = yield call(fetchDashboardApi, action.dashboardId);
    if (response) {
      yield put(fetchDashboardSuccess(response));
    }
  } catch (e) {
    if (e.code === 401) {
      yield put(logoutUser());
    } else {
      yield put(fetchDashboardFailure(e));
    }
  }
}

export default function* defaultSaga() {
  return yield all([fetchDashboardSaga()]);
}
