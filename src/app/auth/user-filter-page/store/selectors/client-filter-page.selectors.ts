import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ClientFilterPageInterface } from '../../models/interfaces/client-filter-page.interface';

export const clientFilterPageFeatureSelector =
  createFeatureSelector<ClientFilterPageInterface>('client-filter');

export const isClientModalOpenSelector = createSelector(
  clientFilterPageFeatureSelector,
  (modalState: ClientFilterPageInterface) => modalState.isModalOpen
);
// export const clientIsSelected = createSelector(
//   clientFilterPageFeatureSelector,
//   (authState: any) => authState.brokerIsLoggedIn
// );