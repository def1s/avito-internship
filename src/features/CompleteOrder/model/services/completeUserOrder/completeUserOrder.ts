import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { notificationsListActions } from 'entities/NotificationsList';
import { ordersListActions } from 'entities/OrdersList';
import { IOrder, IOrderStatus, NotificationTypes } from 'shared/types';

export const completeUserOrder =
	createAsyncThunk<void, number>
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
				thunkAPI.dispatch(notificationsListActions.addNotification({ message: 'Заказ завершен!' }));
			} catch (error) {
				// можно выводить ошибку, которую возвращает сервер
				thunkAPI.dispatch(
					notificationsListActions.addNotification({
						message: 'Произошла ошибка',
						theme: NotificationTypes.ERROR
					})
				);
			} finally {
				thunkAPI.dispatch(ordersListActions.setIsLoading(false));
			}
		}
	);