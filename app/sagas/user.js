import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
  FETCH_USERS,
  FETCH_USER,
  CREATE_USER,
  UPDATE_USER,
  DELETE_USER,
} from '../constants/user';
import {
  fetchUsersSuccess,
  fetchUsersFailure,
  fetchUserSuccess,
  fetchUserFailure,
  createUserSuccess,
  createUserFailure,
  updateUserSuccess,
  updateUserFailure,
  deleteUserSuccess,
  deleteUserFailure,
} from '../actions/user';
import {
  fetchUsers as fetchUsersApi,
  fetchUser as fetchUserApi,
  createUser as createUserApi,
  updateUser as updateUserApi,
  deleteUser as deleteUserApi,
} from '../apis/user';

export function* fetchUsersSaga() {
  yield takeLatest(FETCH_USERS, performFetchUsersAction);
}

function* performFetchUsersAction(action) {
  try {
    const response = yield call(fetchUsersApi, action.options);
    if (response) {
      yield put(fetchUsersSuccess(response));
    }
  } catch (e) {
    console.log('e', e);
    yield put(fetchUsersFailure(e));
  }
}
export function* fetchUserSaga() {
  yield takeLatest(FETCH_USER, performFetchUserAction);
}
function* performFetchUserAction(action) {
  try {
    const response = yield call(fetchUserApi, action.userId);
    if (response) {
      yield put(fetchUserSuccess(response));
    }
  } catch (e) {
    yield put(fetchUserFailure(e));
  }
}
export function* createUserSaga() {
  yield takeLatest(CREATE_USER, performCreateUserAction);
}
function* performCreateUserAction(action) {
  try {
    const response = yield call(createUserApi, action.user);
    if (response) {
      yield put(createUserSuccess(response));
    }
  } catch (e) {
    yield put(createUserFailure(e));
  }
}
export function* updateUserSaga() {
  yield takeLatest(UPDATE_USER, performUpdateUserAction);
}
function* performUpdateUserAction(action) {
  try {
    const response = yield call(updateUserApi, action.user);
    if (response) {
      yield put(updateUserSuccess(response));
    }
  } catch (e) {
    yield put(updateUserFailure(e));
  }
}
export function* deleteUserSaga() {
  yield takeLatest(DELETE_USER, performDeleteUserAction);
}
function* performDeleteUserAction(action) {
  try {
    const response = yield call(deleteUserApi, action.userId);
    if (response) {
      yield put(deleteUserSuccess(response));
    }
  } catch (e) {
    yield put(deleteUserFailure(e));
  }
}

export default function* defaultSaga() {
  return yield all([
    fetchUsersSaga(),
    // fetchUserSaga(),
    // createUserSaga(),
    // updateUserSaga(),
    // deleteUserSaga(),
  ]);
}
