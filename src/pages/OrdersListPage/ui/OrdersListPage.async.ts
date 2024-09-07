import { lazy } from 'react';

export const OrdersListPageAsync = lazy(
	() => import('./OrdersListPage')
);