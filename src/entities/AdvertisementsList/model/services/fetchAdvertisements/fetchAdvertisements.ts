import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IAdvertisement } from 'shared/types';

export const fetchAdvertisements =
	createAsyncThunk<IAdvertisement[], void, { rejectValue: string }>
	(
		'advertisementsList/fetchAdvertisements',
		async (_, thunkAPI) => {
			try {
				const response = await axios.get<IAdvertisement[]>(`${__API_URL__}/advertisements`);

				if (!response.data) {
					throw new Error('Что-то пошло не так');
				}

				return response.data;
			} catch (error) {
				return thunkAPI.rejectWithValue('Произошла ошибка');
			}
		}
	);