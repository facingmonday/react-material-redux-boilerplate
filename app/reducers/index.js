import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'

import UserReducer from './user';
import AuthReducer from './auth';
import DashboardReducer from './dashboard';

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  user: UserReducer,
  auth: AuthReducer,
  dashboard: DashboardReducer,
});

export default rootReducer;
