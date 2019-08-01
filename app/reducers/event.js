import {
  FETCH_EVENTS, FETCH_EVENTS_SUCCESS, FETCH_EVENTS_FAILURE, FETCH_EVENTS_LOADING, RESET_EVENTS,
  FETCH_EVENT, FETCH_EVENT_SUCCESS, FETCH_EVENT_FAILURE, FETCH_EVENT_LOADING, RESET_ACTIVE_EVENT,
  CREATE_EVENT, CREATE_EVENT_SUCCESS, CREATE_EVENT_FAILURE, RESET_NEW_EVENT,
  UPDATE_EVENT, UPDATE_EVENT_SUCCESS, UPDATE_EVENT_FAILURE,
  DELETE_EVENT, DELETE_EVENT_SUCCESS, DELETE_EVENT_FAILURE, RESET_DELETED_EVENT,
  LOGIN_EVENT, LOGIN_EVENT_SUCCESS, LOGIN_EVENT_FAILURE, RESET_LOGGED_IN_EVENT,
  REGISTER_EVENT, REGISTER_EVENT_SUCCESS, REGISTER_EVENT_FAILURE,
  FETCH_ME, FETCH_ME_SUCCESS, FETCH_ME_FAILURE
} from '../constants/event';
import {
  RESET,
} from '../constants/auth';

const initialState = {
  eventList: {
    events: [],
    error: null,
    loading: false,
  },
  activeEvent: {
    event: null,
    error: null,
    loading: false,
  },
  newEvent: {
    event: null,
    error: null,
    loading: false,
  },
  deleteEvent: {
    event: null,
    error: null,
    loading: false,
  },
};
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EVENTS_SUCCESS:
      return {
        ...state,
        eventList: {
          loading: false,
          error: null,
          events: action.events,
        },
      };
    case RESET:
      return initialState;
    default:
      return state;
  }
};
