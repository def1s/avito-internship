import { createAsyncThunk } from '@reduxjs/toolkit';
import { IOrder } from 'shared/types';
import axios from 'axios';

export const fetchOrders =
	createAsyncThunk<IOrder[], void, { rejectValue: string }>
	(
		'ordersList/fetchOrders',
		async (_, thunkAPI) => {
			try {
				const response = await axios.get<IOrder[]>(`${__API_URL__}/orders`);

				if (!response.data) {
					throw new Error('Что-то пошло не так');
				}

				return response.data;
			} catch (error) {
				return thunkAPI.rejectWithValue('Произошла ошибка');
			}
		}
	);