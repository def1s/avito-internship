import { lazy } from 'react';

export const AdvertisementsListPageAsync = lazy(
	() => import('./AdvertisementsListPage')
);