import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// eslint-disable-next-line @conarti/feature-sliced/layers-slices
import { ThunkConfig } from 'app/providers/StoreProvider';
import { advertisementsDetailsActions } from 'entities/AdvertisementDetails';
import { notificationsListActions } from 'entities/NotificationsList';
import { IAdvertisement, NotificationTypes } from 'shared/types';
import {
	getEditAdvertisementFormForm
} from '../../selectors/getEditAdvertisementFormForm/getEditAdvertisementFormForm';

export const editUserAdvertisement =
	createAsyncThunk<void, string, ThunkConfig<void>>
	(
		'editAdvertisement/editUserAdvertisement',
		async (id, thunkAPI) => {
			try {
				const advertisementForm = getEditAdvertisementFormForm(thunkAPI.getState());

				// в ответ приходит обновленное объявление
				const response =
					await axios.patch<IAdvertisement>(`${__API_URL__}/advertisements/${id}`, advertisementForm);

				if (!response.data) {
					throw new Error('Что-то пошло не так');
				}

				thunkAPI.dispatch(
					notificationsListActions.addNotification({ message: 'Объявление успешно отредактировано!' })
				);

				// обновляем текущее обновление в соответствии с ответом
				thunkAPI.dispatch(advertisementsDetailsActions.updateAdvertisement(response.data));
			} catch (error) {
				// можно выводить сообщение с сервера
				thunkAPI.dispatch(
					notificationsListActions.addNotification({
						message: 'Произошла ошибка!',
						theme: NotificationTypes.ERROR
					})
				);
			}
		}
	);