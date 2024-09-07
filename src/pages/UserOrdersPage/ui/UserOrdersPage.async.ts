import { lazy } from 'react';

export const UserOrdersPageAsync = lazy(
	() => import('./UserOrdersPage')
);