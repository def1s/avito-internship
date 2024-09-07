import { RoutesPaths } from 'shared/config/routerConfig/rounterConfig';

export interface NavbarItemType {
	path: string;
	text: string;
}

export const navbarItemsList: NavbarItemType[] = [
	{
		path: RoutesPaths.advertisementList,
		text: 'Мои объявления'
	},
	{
		path: RoutesPaths.ordersList,
		text: 'Заказы'
	}
];