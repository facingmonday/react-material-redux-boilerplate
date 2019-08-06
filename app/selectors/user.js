import { createSelector } from 'reselect';

/**
 * Direct selector to the users state domain
 */
export const selectUsersDomain = state => state.user;

/**
 * Sub Domain Selectors
 */
export const selectUsers = () =>
  createSelector(
    selectUsersDomain,
    users => users.usersList,
  );
export const selectNewUserDomain = () =>
  createSelector(
    selectUsersDomain,
    users => users.newUser,
  );
export const selectDeletedUserDomain = () =>
  createSelector(
    selectUsersDomain,
    users => users.deletedUser,
  );
export const selectActiveUser = () =>
  createSelector(
    selectUsersDomain,
    users => users.activeUser,
  );
