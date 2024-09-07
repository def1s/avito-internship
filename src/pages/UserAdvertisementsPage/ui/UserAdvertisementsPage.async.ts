import { lazy } from 'react';

export const UserAdvertisementsPageAsync = lazy(
	() => import('./UserAdvertisementsPage')
);