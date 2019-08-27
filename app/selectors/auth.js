import { createSelector } from 'reselect';
import config from '../../config/defaults';

const selectAuth = state => state.auth;

export const selectUser = () =>
  createSelector(
    selectAuth,
    auth => auth.user,
  );
export const selectAuthenticated = () =>
  createSelector(
    selectAuth,
    auth => auth.authenticated,
  );
export const selectError = () =>
  createSelector(
    selectAuth,
    auth => auth.error,
  );
export const selectLoading = () =>
  createSelector(
    selectAuth,
    auth => auth.loading,
  );
export const selectLoaded = () =>
  createSelector(
    selectAuth,
    auth => auth.loaded,
  );
export const selectAuthObject = () =>
  createSelector(
    selectUser(),
    selectAuthenticated(),
    selectLoading(),
    selectError(),
    selectLoaded(),
    (user, authenticated, loading, error, loaded) => ({
      user,
      authenticated,
      loading,
      error,
      loaded,
    }),
  );
export const selectNavigation = () =>
  createSelector(
    selectAuth,
    auth => (auth && auth.user && auth.user.navigation) ? auth.user.navigation : config.navigation, // eslint-disable-line
  );
