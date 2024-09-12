import { lazy } from 'react';

export const AdvertisementPageAsync = lazy(
	() => import('./AdvertisementPage')
);