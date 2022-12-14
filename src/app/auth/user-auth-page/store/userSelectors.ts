import { createFeatureSelector, createSelector } from '@ngrx/store';

import { UserAuthStateInterface } from '../models/interfaces/user-auth-state.interface';

export const authFeatureSelector =
  createFeatureSelector<UserAuthStateInterface>('user-auth');

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: UserAuthStateInterface) => authState.isSubmitting
);
export const validationErrorsSelector = createSelector(
  authFeatureSelector,
  (authState: UserAuthStateInterface) => authState.validationErrors
);
export const userIsLoggedIn = createSelector(
  authFeatureSelector,
  (authState: UserAuthStateInterface) => authState.userIsLoggedIn
);
