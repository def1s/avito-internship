import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { advertisementsDetailsActions } from 'entities/AdvertisementDetails';
import { IAdvertisement } from 'shared/types';
import {
	getEditAdvertisementFormForm
} from '../../selectors/getEditAdvertisementFormForm/getEditAdvertisementFormForm';

export const editUserAdvertisement =
	createAsyncThunk<void, string, { rejectValue: string }>
	(
		'editAdvertisement/editUserAdvertisement',
		async (id, thunkAPI) => {
			try {
				// TODO типизировать thunk
				// @ts-expect-error отсутствует типизация для thunk
				const advertisementForm = getEditAdvertisementFormForm(thunkAPI.getState());

				// в ответ приходит обновленное объявление
				const response =
					await axios.patch<IAdvertisement>(`${__API_URL__}/advertisements/${id}`, advertisementForm);

				if (!response.data) {
					throw new Error('Что-то пошло не так');
				}

				// TODO сделать компонент Notification для уведомления пользователя, сейчас ничего не выводится!

				// обновляем текущее обновление в соответствии с ответом
				thunkAPI.dispatch(advertisementsDetailsActions.updateAdvertisement(response.data));
			} catch (error) {
				return thunkAPI.rejectWithValue('Произошла ошибка');
			}
		}
	);