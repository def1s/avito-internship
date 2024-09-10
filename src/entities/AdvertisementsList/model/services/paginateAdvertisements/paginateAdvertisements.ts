import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IAdvertisement } from 'shared/types';
import {
	getAdvertisementsListLimit
} from '../../selectors/getAdvertisementsListLimit/getAdvertisementsListLimit';
import {
	getAdvertisementsListOffset
} from '../../selectors/getAdvertisementsListOffset/getAdvertisementsListOffset';
import {
	getAdvertisementsListStart
} from '../../selectors/getAdvertisementsListStart/getAdvertisementsListStart';


export const paginateAdvertisements =
	createAsyncThunk<IAdvertisement[], void, { rejectValue: string }>
	(
		'advertisementsList/paginateAdvertisements',
		async (_, thunkAPI) => {
			try {
				// @ts-expect-error нет типизации для thunk
				const limit = getAdvertisementsListLimit(thunkAPI.getState());
				// @ts-expect-error нет типизации для thunk
				const start = getAdvertisementsListStart(thunkAPI.getState());
				// @ts-expect-error нет типизации для thunk
				const offset = getAdvertisementsListOffset(thunkAPI.getState());

				const response =
					await axios.get<IAdvertisement[]>(
						`${__API_URL__}/advertisements`,
						{
							params: {
								_start: start + offset,
								_limit: limit
							}
						}
					);

				if (!response.data) {
					throw new Error('Что-то пошло не так');
				}

				return response.data;
			} catch (error) {
				return thunkAPI.rejectWithValue('Произошла ошибка');
			}
		}
	);