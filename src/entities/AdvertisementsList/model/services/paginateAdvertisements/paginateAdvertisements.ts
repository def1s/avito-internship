import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// eslint-disable-next-line @conarti/feature-sliced/layers-slices
import { ThunkConfig } from 'app/providers/StoreProvider';
import { IAdvertisement } from 'shared/types';
import {
	getAdvertisementsListLimit
} from '../../selectors/getAdvertisementsListLimit/getAdvertisementsListLimit';
import {
	getAdvertisementsListOffset
} from '../../selectors/getAdvertisementsListOffset/getAdvertisementsListOffset';
import {
	getAdvertisementsListSearchStr
} from '../../selectors/getAdvertisementsListSearchStr/getAdvertisementsListSearchStr';
import {
	getAdvertisementsListStart
} from '../../selectors/getAdvertisementsListStart/getAdvertisementsListStart';


export const paginateAdvertisements =
	createAsyncThunk<IAdvertisement[], void, ThunkConfig<string>>
	(
		'advertisementsList/paginateAdvertisements',
		async (_, thunkAPI) => {
			try {
				const limit = getAdvertisementsListLimit(thunkAPI.getState());
				const start = getAdvertisementsListStart(thunkAPI.getState());
				const offset = getAdvertisementsListOffset(thunkAPI.getState());
				const searchStr = getAdvertisementsListSearchStr(thunkAPI.getState());

				const response =
					await axios.get<IAdvertisement[]>(
						`${__API_URL__}/advertisements`,
						{
							params: {
								_start: start + offset,
								_limit: limit,
								name: searchStr
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