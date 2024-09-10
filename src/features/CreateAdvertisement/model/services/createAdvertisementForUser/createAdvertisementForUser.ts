import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {
	advertisementsListActions
} from 'entities/AdvertisementsList';
import {
	getAdvertisementsListIsEnd
} from 'entities/AdvertisementsList';
import { IAdvertisement } from 'shared/types';
import {
	getCreateAdvertisementFormForm
} from '../../selectors/getCreateAdvertisementFormForm/getCreateAdvertisementFormForm';

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
					await axios.post<IAdvertisement>(`${__API_URL__}/advertisements`, advertisementForm);

				if (!response.data) {
					throw new Error('Что-то пошло не так');
				}

				// TODO сделать компонент NotificationsList для уведомления пользователя, сейчас ничего не выводится!

				// @ts-expect-error отсутствует типизация для thunk
				const isEnd = getAdvertisementsListIsEnd(thunkAPI.getState());
				// после добавления объявления будем обновлять список только если уже находимся на последней странице
				if (isEnd) {
					thunkAPI.dispatch(advertisementsListActions.addAdvertisement(response.data));
				}
			} catch (error) {
				return thunkAPI.rejectWithValue('Произошла ошибка');
			}
		}
	);