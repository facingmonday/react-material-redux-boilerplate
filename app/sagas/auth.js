import { all, call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import {
  FETCH_ME,
  LOGIN_USER,
  LOGOUT_USER,
} from '../constants/auth';
import {
  fetchMeSuccess,
  fetchMeFailure,
  loginUserSuccess,
  loginUserFailure,
  reset,
} from '../actions/auth';
import {
  fetchMe as fetchMeApi,
  loginUser as loginUserApi,
} from '../apis/auth';
import { getCookie, setCookie, deleteCookie } from '../utils';

function* performFetchMeAction(action) {
  console.log('performFetchMeAction');
  try {
    const response = yield call(fetchMeApi, action.userId);
    if (response) {
      yield put(fetchMeSuccess(response));
    }
  } catch (e) {
    yield put(fetchMeFailure(e));
    yield put(push('/login'));
  }
}
function* performLoginUserAction(action) {
  try {
    const response = yield call(loginUserApi, action.credentials);
    if (response) {
      setCookie('tf-auth', response.token);
      yield put(loginUserSuccess(response));
    }
  } catch (e) {
    yield put(loginUserFailure(e));
    yield put(push('/login'));
  }
}
function* performLogoutUserAction(){
  console.log('performLogoutUserAction');
  deleteCookie('tf-auth');
  yield put(reset());
  yield put(push('/login'));
}
export function* fetchMeSaga() {
  yield takeLatest(FETCH_ME, performFetchMeAction);
}
export function* loginUserSaga() {
  yield takeLatest(LOGIN_USER, performLoginUserAction);
}
export function* logoutUserSaga() {
  yield takeLatest(LOGOUT_USER, performLogoutUserAction);
}
export default function* defaultSaga() {
  return yield all([
    fetchMeSaga(),
    loginUserSaga(),
    logoutUserSaga(),
  ]);
}
