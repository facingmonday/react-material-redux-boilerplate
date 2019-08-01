import {
  FETCH_USER,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  FETCH_USERS,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  CREATE_USER,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE,
  UPDATE_USER,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
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
    options
  };
}
export function fetchUsersSuccess(users) {
  return {
    type: FETCH_USERS_SUCCESS,
    users,
  };
}
export function fetchUsersFailure(error) {
  return {
    type: FETCH_USERS_FAILURE,
    error,
  };
}
export function createUser(user) {
  return {
    type: CREATE_USER,
    user,
  };
}
export function createUserSuccess(user) {
  return {
    type: CREATE_USER_SUCCESS,
    user,
  };
}
export function createUserFailure(error) {
  return {
    type: CREATE_USER_FAILURE,
    error,
  };
}
export function updateUser(user) {
  return {
    type: UPDATE_USER,
    user,
  };
}
export function updateUserSuccess(user) {
  return {
    type: UPDATE_USER_SUCCESS,
    user,
  };
}
export function updateUserFailure(error) {
  return {
    type: UPDATE_USER_FAILURE,
    error,
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
