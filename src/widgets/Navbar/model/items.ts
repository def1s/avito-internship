// eslint-disable-next-line @conarti/feature-sliced/layers-slices
import { RoutesPaths } from 'app/providers/router/routerConfig/rounterConfig';

export interface NavbarItemType {
	path: string;
	text: string;
}

export const navbarItemsList: NavbarItemType[] = [
	{
		path: RoutesPaths.advertisementList,
		text: 'Объявления'
	},
	{
		path: RoutesPaths.ordersList,
		text: 'Заказы'
	}
];