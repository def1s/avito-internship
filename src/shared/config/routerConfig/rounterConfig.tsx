import { RouteProps } from 'react-router-dom';
/* eslint-disable @conarti/feature-sliced/layers-slices */
import { AdvertisementPage } from 'pages/AdvertisementPage';
import { AdvertisementsListPage } from 'pages/AdvertisementsPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { OrdersListPage } from 'pages/OrdersPage';
/* eslint-enable @conarti/feature-sliced/layers-slices */

export enum Routes {
	ADVERTISEMENT = 'advertisement',
	ADVERTISEMENTS_LIST = 'advertisementList',
	ORDERS_LIST = 'ordersList',
	NOT_FOUND = 'notFound',
}

export const RoutesPaths: Record<Routes, string> = {
	[Routes.ADVERTISEMENT]: '/advertisements/:id',
	[Routes.ADVERTISEMENTS_LIST]: '/advertisements',
	[Routes.ORDERS_LIST]: '/orders',
	// 404
	[Routes.NOT_FOUND]: '*'
};

export const routerConfig: Record<Routes, RouteProps> = {
	[Routes.ADVERTISEMENT]: {
		path: RoutesPaths.advertisement,
		element: <AdvertisementPage />
	},
	[Routes.ADVERTISEMENTS_LIST]: {
		path: RoutesPaths.advertisementList,
		element: <AdvertisementsListPage />
	},
	[Routes.ORDERS_LIST]: {
		path: RoutesPaths.ordersList,
		element: <OrdersListPage />
	},
	[Routes.NOT_FOUND]: {
		path: RoutesPaths.notFound,
		element: <NotFoundPage />
	}
};