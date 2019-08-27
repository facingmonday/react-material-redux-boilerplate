import {
  FETCH_USERS,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  RESET_USERS,
  FETCH_USER,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  SAVE_USER,
  SAVE_USER_SUCCESS,
  SAVE_USER_FAILURE,
  UPDATE_ACTIVE_USER,
  RESET_ACTIVE_USER,
  DELETE_USER,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
  RESET_DELETED_USER,
} from '../constants/user';
import { RESET } from '../constants/auth';

const initialState = {
  usersList: {
    error: null,
    loading: false,
    offset: 0,
    limit: 20,
    sort: [],
    searchTerm: '',
    filters: [],
    total: 0,
    results: [],
  },
  activeUser: {
    user: {},
    error: null,
    loading: false,
  },
  newUser: {
    user: null,
    error: null,
    loading: false,
  },
  deleteUser: {
    user: null,
    error: null,
    loading: false,
  },
};
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        usersList: {
          ...state.usersList,
          ...action.options,
          loading: true,
        },
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        usersList: {
          results: action.results,
          error: null,
          loading: false,
          offset: action.offset,
          limit: action.limit,
          sort: action.sort,
          searchTerm: action.searchTerm,
          filters: action.filters,
          total: action.total,
        },
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        usersList: {
          ...initialState.usersList,
          loading: false,
          error: action.error,
        },
      };
    case RESET_USERS:
      return {
        ...state,
        usersList: initialState.usersList,
      };
    case FETCH_USER:
      return {
        ...state,
        activeUser: { ...initialState.activeUser, loading: true },
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        activeUser: {
          user: action.user,
          error: null,
          loading: false,
        },
      };
    case FETCH_USER_FAILURE:
      return {
        ...state,
        activeUser: {
          ...initialState.activeUser,
          loading: false,
          error: action.error,
        },
      };
    case SAVE_USER:
      return {
        ...state,
        activeUser: {
          ...state.activeUser,
          loading: true,
          error: null,
        },
      };
    case SAVE_USER_SUCCESS:
      return {
        ...state,
        activeUser: {
          user: action.user,
          loading: false,
          error: null,
        },
      };
    case SAVE_USER_FAILURE:
      return {
        ...state,
        activeUser: {
          ...state.activeUser,
          loading: false,
          error: action.error,
        },
      };
    case UPDATE_ACTIVE_USER:
      return {
        ...state,
        activeUser: {
          ...state.activeUser,
          user: { ...state.activeUser.user, ...action.user },
        },
      };
    case RESET_ACTIVE_USER:
      return {
        ...state,
        activeUser: initialState.activeUser,
      };
    case DELETE_USER:
      return {
        ...state,
        deleteUser: {
          user: action.user,
          loading: true,
        },
      };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        deleteUser: {
          ...state.deleteUser,
          loading: false,
        },
      };
    case DELETE_USER_FAILURE:
      return {
        ...state,
        deleteUser: {
          ...initialState.deleteUser,
          error: action.error,
        },
      };
    case RESET_DELETED_USER:
      return {
        ...state,
        deleteUser: {
          ...initialState.deleteUser,
        },
      };
    case RESET:
      return initialState;
    default:
      return state;
  }
};
