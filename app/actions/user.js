import {
  FETCH_USER,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  FETCH_USERS,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  SAVE_USER,
  SAVE_USER_SUCCESS,
  SAVE_USER_FAILURE,
  UPDATE_ACTIVE_USER,
  RESET_ACTIVE_USER,
  DELETE_USER,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
} from '../constants/user';

export function fetchUser(userId) {
  return {
    type: FETCH_USER,
    userId,
  };
}
export function fetchUserSuccess(user) {
  return {
    type: FETCH_USER_SUCCESS,
    user,
  };
}
export function fetchUserFailure(error) {
  return {
    type: FETCH_USER_FAILURE,
    error,
  };
}
export function fetchUsers(options) {
  return {
    type: FETCH_USERS,
    options,
  };
}
export function fetchUsersSuccess(response) {
  return {
    type: FETCH_USERS_SUCCESS,
    stats: response.stats,
    results: response.results,
  };
}
export function fetchUsersFailure(error) {
  return {
    type: FETCH_USERS_FAILURE,
    error,
  };
}
export function saveUser(user) {
  return {
    type: SAVE_USER,
    user,
  };
}
export function saveUserSuccess(user) {
  return {
    type: SAVE_USER_SUCCESS,
    user,
  };
}
export function saveUserFailure(error) {
  return {
    type: SAVE_USER_FAILURE,
    error,
  };
}
export function updateActiveUser(user) {
  return {
    type: UPDATE_ACTIVE_USER,
    user,
  };
}
export function resetActiveUser(data) {
  return {
    type: RESET_ACTIVE_USER,
    data,
  };
}
export function deleteUser(userId) {
  return {
    type: DELETE_USER,
    userId,
  };
}
export function deleteUserSuccess(user) {
  return {
    type: DELETE_USER_SUCCESS,
    user,
  };
}
export function deleteUserFailure(error) {
  return {
    type: DELETE_USER_FAILURE,
    error,
  };
}
