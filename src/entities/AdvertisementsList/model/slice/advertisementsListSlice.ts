import { AdvertisementsListSchema } from '../types/advertisementsListSchema';
import { createSlice } from '@reduxjs/toolkit';
import { fetchAdvertisements } from '../services/fetchAdvertisements/fetchAdvertisements';

const initialState: AdvertisementsListSchema = {
	data: [],
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
		builder.addCase(fetchAdvertisements.fulfilled, (state, action) => {
			state.isLoading = false;
			state.data = action.payload;
		});
		builder.addCase(fetchAdvertisements.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		});
	}
});

export const { actions: advertisementsListActions } = advertisementsListSlice;
export const { reducer: advertisementsListReducer } = advertisementsListSlice;