import {
  FETCH_CLIENTS, FETCH_CLIENTS_SUCCESS, FETCH_CLIENTS_FAILURE,
  FETCH_CLIENT, FETCH_CLIENT_SUCCESS, FETCH_CLIENT_FAILURE,
} from '../constants/client';
import {
  RESET,
} from '../constants/auth';

const initialState = {
  clientList: {
    clients: [],
    error: null,
    loading: false,
  },
  activeClient: {
    client: null,
    error: null,
    loading: false,
  },
};
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CLIENTS:
      return {
        ...state,
        clientList: {
          loading: true,
          error: null,
          clients: action.clients,
        },
      };
    case FETCH_CLIENTS_SUCCESS:
      return {
        ...state,
        clientList: {
          loading: false,
          error: null,
          clients: action.clients,
        },
      };
    case FETCH_CLIENTS_FAILURE:
      return {
        ...state,
        clientList: {
          loading: false,
          error: action.error,
          clients: [],
        },
      };
    case FETCH_CLIENT:
      return {
        ...state,
        activeClient: {
          loading: true,
          error: null,
          client: action.client,
        },
      };
    case FETCH_CLIENT_SUCCESS:
      return {
        ...state,
        activeClient: {
          loading: false,
          error: null,
          client: action.client,
        },
      };
    case FETCH_CLIENT_FAILURE:
      return {
        ...state,
        activeClient: {
          loading: false,
          error: action.error,
          client: null,
        },
      };
    case RESET:
      return initialState;
    default:
      return state;
  }
};
