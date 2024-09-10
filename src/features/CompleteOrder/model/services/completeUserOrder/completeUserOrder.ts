import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ordersListActions } from 'entities/OrdersList';
import { IOrder, IOrderStatus } from 'shared/types';

export const completeUserOrder =
	createAsyncThunk<void, number, { rejectValue: string }>
	(
		'completeOrder/completeUserOrder',
		async (id, thunkAPI) => {
			try {
				// ставлю в true глобальный лоадер для списка
				thunkAPI.dispatch(ordersListActions.setIsLoading(true));

				// я думаю, что завершение заказа означает его доставку
				const response =
					await axios.patch<IOrder>(`${__API_URL__}/orders/${id}`, {
						status: IOrderStatus.RECEIVED,
						finishedAt: new Date()
					});

				if (!response.data) {
					throw new Error('Что-то пошло не так');
				}

				thunkAPI.dispatch(ordersListActions.updateOrder(response.data));
				// TODO сделать компонент NotificationsList для уведомления пользователя, сейчас ничего не выводится!
			} catch (error) {
				return thunkAPI.rejectWithValue('Произошла ошибка');
			} finally {
				thunkAPI.dispatch(ordersListActions.setIsLoading(false));
			}
		}
	);