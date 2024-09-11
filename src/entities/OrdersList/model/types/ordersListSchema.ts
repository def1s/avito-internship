import { IOrder, IOrderStatus } from 'shared/types';

export interface OrdersListSchema {
	orders: IOrder[];
	isLoading: boolean;
	error?: string;
	filter?: IOrderStatus;
}
