import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { advertisementsListActions, getAdvertisementsListIsEnd } from 'entities/AdvertisementsList';
import { notificationsListActions } from 'entities/NotificationsList';
import { IAdvertisement, NotificationTypes } from 'shared/types';
import {
	getCreateAdvertisementFormForm
} from '../../selectors/getCreateAdvertisementFormForm/getCreateAdvertisementFormForm';

export const createAdvertisementForUser =
	createAsyncThunk<void, void>
	(
		'createAdvertisement/createAdvertisementForUser',
		async (_, thunkAPI) => {
			try {
				// TODO типизировать thunk
				// @ts-expect-error отсутствует типизация для thunk
				const advertisementForm = getCreateAdvertisementFormForm(thunkAPI.getState());

				const response =
					await axios.post<IAdvertisement>(`${__API_URL__}/advertisements`, advertisementForm);

				if (!response.data) {
					throw new Error('Что-то пошло не так');
				}

				// @ts-expect-error отсутствует типизация для thunk
				const isEnd = getAdvertisementsListIsEnd(thunkAPI.getState());
				// после добавления объявления будем обновлять список только если уже находимся на последней странице
				if (isEnd) {
					thunkAPI.dispatch(advertisementsListActions.addAdvertisement(response.data));
				}

				thunkAPI.dispatch(notificationsListActions.addNotification({ message: 'Объявление успешно создано!' }));
			} catch (error) {
				// можно выводить ошибку с бекенда
				thunkAPI.dispatch(notificationsListActions.addNotification({
					message: 'Произошла ошибка',
					theme: NotificationTypes.ERROR
				}));
			}
		}
	);