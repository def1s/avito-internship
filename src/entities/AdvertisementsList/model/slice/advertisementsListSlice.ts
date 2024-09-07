import { AdvertisementsListSchema } from '../types/advertisementsListSchema';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchAdvertisements } from '../services/fetchAdvertisements/fetchAdvertisements';
import { IAdvertisement } from 'shared/types';

const initialState: AdvertisementsListSchema = {
	advertisements: [],
	isLoading: false
};

const advertisementsListSlice = createSlice({
	name: 'advertisementsList',
	initialState,
	reducers: {

	},
	extraReducers: (builder) => {
		builder.addCase(fetchAdvertisements.pending, (state) => {
			state.error = undefined;
			state.isLoading = true;
		});
		builder.addCase(fetchAdvertisements.fulfilled, (state, action: PayloadAction<IAdvertisement[]>) => {
			state.isLoading = false;
			state.advertisements = action.payload;
		});
		builder.addCase(fetchAdvertisements.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		});
	}
});

export const { actions: advertisementsListActions } = advertisementsListSlice;
export const { reducer: advertisementsListReducer } = advertisementsListSlice;