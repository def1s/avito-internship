import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LIMIT_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { IAdvertisement } from 'shared/types';
import { paginateAdvertisements } from '../services/paginateAdvertisements/paginateAdvertisements';
import { AdvertisementsListSchema } from '../types/advertisementsListSchema';

const limit = Number(localStorage.getItem(LIMIT_LOCALSTORAGE_KEY));

const initialState: AdvertisementsListSchema = {
	advertisements: [],
	isLoading: false,
	start: 0,
	limit: limit || 10,
	offset: 0,
	isEnd: false,
	searchStr: ''
};

const advertisementsListSlice = createSlice({
	name: 'advertisementsList',
	initialState,
	reducers: {
		addAdvertisement: (state, action: PayloadAction<IAdvertisement>) => {
			state.advertisements.push(action.payload);
		},
		setLimit: (state, action: PayloadAction<number>) => {
			state.limit = action.payload;
			localStorage.setItem(LIMIT_LOCALSTORAGE_KEY, String(action.payload));
		},
		setSearchStr: (state, action: PayloadAction<string>) => {
			state.isLoading = true;
			state.searchStr = action.payload;
		},
		resetAdvertisements: (state) => {
			state.offset = 0;
			state.start = 0;
			state.isEnd = false;
			state.advertisements = [];
		}
	},
	extraReducers: (builder) => {
		builder.addCase(paginateAdvertisements.pending, (state) => {
			state.error = undefined;
			state.isLoading = true;
		});
		builder.addCase(paginateAdvertisements.fulfilled, (state, action: PayloadAction<IAdvertisement[]>) => {
			state.isLoading = false;

			if (action.payload.length === 0 || action.payload.length !== state.limit) {
				state.isEnd = true;
			}

			state.advertisements = [...state.advertisements, ...action.payload];
			state.offset += state.limit;
		});
		builder.addCase(paginateAdvertisements.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		});
	}
});

export const { actions: advertisementsListActions } = advertisementsListSlice;
export const { reducer: advertisementsListReducer } = advertisementsListSlice;