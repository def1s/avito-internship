import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {
	getCreateAdvertisementFormForm
} from '../../selectors/getCreateAdvertisementFormForm/getCreateAdvertisementFormForm';
import { IAdvertisementForm } from '../../types/createAdvertisementFormSchema';

export const createAdvertisementForUser =
	createAsyncThunk<void, void, { rejectValue: string }>
	(
		'createAdvertisement/createAdvertisementForUser',
		async (_, thunkAPI) => {
			try {
				// TODO типизировать thunk
				// @ts-expect-error отсутствует типизация для thunk
				const advertisementForm = getCreateAdvertisementFormForm(thunkAPI.getState());

				const response =
					await axios.post<IAdvertisementForm>(`${__API_URL__}/advertisements`, advertisementForm);

				if (!response.data) {
					throw new Error('Что-то пошло не так');
				}

				// TODO сделать компонент Notification для уведомления пользователя, сейчас ничего не выводится!
			} catch (error) {
				return thunkAPI.rejectWithValue('Произошла ошибка');
			}
		}
	);