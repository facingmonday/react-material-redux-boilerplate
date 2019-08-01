import {
  FETCH_STATS,
  FETCH_STATS_SUCCESS,
  FETCH_STATS_FAILURE,
} from '../constants/stat';
import {
  RESET,
} from '../constants/auth';

const initialState = {
  stats: [],
  error: null,
  loading: false,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STATS_SUCCESS:
      return {
        loading: false,
        error: null,
        stats: action.stats,
      };
    case RESET:
      return initialState;
    default:
      return state;
  }
};
