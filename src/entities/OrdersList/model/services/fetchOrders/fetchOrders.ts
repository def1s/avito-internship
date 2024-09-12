import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// eslint-disable-next-line @conarti/feature-sliced/layers-slices
import { ThunkConfig } from 'app/providers/StoreProvider';
import { IOrder } from 'shared/types';
import { getOrdersListFilter } from '../../selectors/getOrdersListFilter/getOrdersListFilter';
import { getOrdersListSort } from '../../selectors/getOrdersListSort/getOrdersListSort';
// eslint-disable-next-line @conarti/feature-sliced/layers-slices

export const fetchOrders =
	createAsyncThunk<IOrder[], void, ThunkConfig<string>>
	(
		'ordersList/fetchOrders',
		async (_, thunkAPI) => {
			try {
				const filter = getOrdersListFilter(thunkAPI.getState());
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