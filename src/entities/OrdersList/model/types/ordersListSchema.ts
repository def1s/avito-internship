import { IOrder } from 'shared/types';

export interface OrdersListSchema {
	orders: IOrder[];
	isLoading: boolean;
	error?: string;
}