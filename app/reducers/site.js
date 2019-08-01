import {
  FETCH_SITES, FETCH_SITES_SUCCESS, FETCH_SITES_FAILURE, FETCH_SITES_LOADING, RESET_SITES,
  FETCH_SITE, FETCH_SITE_SUCCESS, FETCH_SITE_FAILURE, FETCH_SITE_LOADING, RESET_ACTIVE_SITE,
  CREATE_SITE, CREATE_SITE_SUCCESS, CREATE_SITE_FAILURE, RESET_NEW_SITE,
  UPDATE_SITE, UPDATE_SITE_SUCCESS, UPDATE_SITE_FAILURE,
  DELETE_SITE, DELETE_SITE_SUCCESS, DELETE_SITE_FAILURE, RESET_DELETED_SITE,
  LOGIN_SITE, LOGIN_SITE_SUCCESS, LOGIN_SITE_FAILURE, RESET_LOGGED_IN_SITE,
  REGISTER_SITE, REGISTER_SITE_SUCCESS, REGISTER_SITE_FAILURE,
  FETCH_ME, FETCH_ME_SUCCESS, FETCH_ME_FAILURE
} from '../constants/site';
import {
  RESET,
} from '../constants/auth';

const initialState = {
  siteList: {
    sites: [],
    error: null,
    loading: false,
  },
  activeEvent: {
    site: null,
    error: null,
    loading: false,
  },
  newEvent: {
    site: null,
    error: null,
    loading: false,
  },
  deleteEvent: {
    site: null,
    error: null,
    loading: false,
  },
};
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SITES:
      return {
        ...state,
        siteList: {
          loading: true,
          error: null,
          sites: action.sites,
        },
      };
    case FETCH_SITES_SUCCESS:
      return {
        ...state,
        siteList: {
          loading: false,
          error: null,
          sites: action.sites,
        },
      };
    case FETCH_SITES_FAILURE:
      return {
        ...state,
        siteList: {
          loading: false,
          error: action.error,
          sites: [],
        },
      };
    case CREATE_SITE:
      return {
        ...state,
        newSite: {
          loading: true,
          error: null,
          site: {},
        },
      };
    case CREATE_SITE_SUCCESS:
      return {
        ...state,
        newSite: {
          loading: false,
          error: null,
          site: action.site,
        },
      };
    case CREATE_SITE_FAILURE:
      return {
        ...state,
        newSite: {
          loading: false,
          error: action.error,
          site: {},
        },
      };
    case RESET:
      return initialState;
    default:
      return state;
  }
};
