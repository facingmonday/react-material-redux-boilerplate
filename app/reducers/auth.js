import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  RESET_LOGGED_IN_USER,
  FETCH_ME,
  FETCH_ME_SUCCESS,
  FETCH_ME_FAILURE,
  RESET,
} from '../constants/auth';

const initialState = {
  authenticated: false,
  user: null,
  error: null,
  loading: false,
  loaded: false,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOGIN_USER_SUCCESS:
      return {
        authenticated: true,
        user: action.user,
        loading: false,
        error: null,
        loaded: true,
      };
    case LOGIN_USER_FAILURE:
      return {
        authenticated: false,
        user: null,
        loading: false,
        error: action.error,
        loaded: true,
      };
    case RESET_LOGGED_IN_USER:
      return state;
    case FETCH_ME:
      return {
        ...state,
        user: null,
        loading: true,
        error: null,
        loaded: false,
      };
    case FETCH_ME_SUCCESS:
      return {
        ...state,
        authenticated: true,
        user: action.me,
        loading: false,
        error: null,
        loaded: true,
      };
    case FETCH_ME_FAILURE:
      return {
        ...state,
        user: null,
        loading: false,
        error: action.error,
        loaded: true,
      };
    case RESET:
      return initialState;
    default:
      return state;
  }
};
