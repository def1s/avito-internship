import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IOrder } from 'shared/types';
import { getOrdersListFilter } from '../../selectors/getOrdersListFilter/getOrdersListFilter';
import { getOrdersListSort } from '../../selectors/getOrdersListSort/getOrdersListSort';

export const fetchOrders =
	createAsyncThunk<IOrder[], void, { rejectValue: string }>
	(
		'ordersList/fetchOrders',
		async (_, thunkAPI) => {
			try {
				// @ts-expect-error нет типизации для thunk
				const filter = getOrdersListFilter(thunkAPI.getState());
				// @ts-expect-error нет типизации для thunk
				const sort = getOrdersListSort(thunkAPI.getState());

				const response =
					await axios.get<IOrder[]>(`${__API_URL__}/orders`, {
						params: {
							status: filter,
							_sort: sort
						}
					});

				if (!response.data) {
					throw new Error('Что-то пошло не так');
				}

				return response.data;
			} catch (error) {
				return thunkAPI.rejectWithValue('Произошла ошибка');
			}
		}
	);