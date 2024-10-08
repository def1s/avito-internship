import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IOrder, IOrderStatus } from 'shared/types';
import { SortKeys } from '../../lib/sort';
import { fetchOrders } from '../services/fetchOrders/fetchOrders';
import { OrdersListSchema } from '../types/ordersListSchema';

const initialState: OrdersListSchema = {
	orders: [],
	isLoading: false
};

const ordersListSlice = createSlice({
	name: 'ordersList',
	initialState,
	reducers: {
		setIsLoading: (state, action: PayloadAction<boolean>) => {
			state.isLoading = action.payload;
		},
		updateOrder: (state, action: PayloadAction<IOrder>) => {
			const index = state.orders.findIndex(order => order.id === action.payload.id);
			if (index !== -1) {
				state.orders[index] = action.payload; // обновляем заказ с новым значением
			}
		},
		setFilter: (state, action: PayloadAction<IOrderStatus>) => {
			state.filter = action.payload;
		},
		removeFilter: (state) => {
			state.filter = undefined;
		},
		setSort: (state, action: PayloadAction<SortKeys>) => {
			state.sort = action.payload;
		},
		removeSort: (state) => {
			state.sort = undefined;
		}
	},
	extraReducers: (builder) => {
		builder.addCase(fetchOrders.pending, (state) => {
			state.isLoading = true;
			state.error = undefined;
		});
		builder.addCase(fetchOrders.fulfilled, (state, action: PayloadAction<IOrder[]>) => {
			state.isLoading = false;
			state.orders = action.payload;
		});
		builder.addCase(fetchOrders.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		});
	}
});

export const { actions: ordersListActions } = ordersListSlice;
export const { reducer: ordersListReducer } = ordersListSlice;