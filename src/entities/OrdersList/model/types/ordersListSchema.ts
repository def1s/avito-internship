import { IOrder, IOrderStatus } from 'shared/types';
import { SortKeys } from '../../lib/sort';

export interface OrdersListSchema {
	orders: IOrder[];
	isLoading: boolean;
	error?: string;
	filter?: IOrderStatus;
	sort?: SortKeys;
}
