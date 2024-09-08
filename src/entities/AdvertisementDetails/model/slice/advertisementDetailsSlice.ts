import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAdvertisement } from 'shared/types';
import { fetchAdvertisementDetails } from '../services/fetchAdvertisementDetails/fetchAdvertisementDetails';
import { AdvertisementDetailsSchema } from '../types/advertisementDetailsSchema';

const initialState: AdvertisementDetailsSchema = {
	advertisement: {
		id: '-1',
		imageUrl: '',
		name: '',
		likes: 0,
		views: 0,
		price: 0,
		createdAt: '',
		description: ''
	},
	isLoading: false
};

const advertisementsDetailsSlice = createSlice({
	name: 'advertisementDetails',
	initialState,
	reducers: {

	},
	extraReducers: (builder) => {
		builder.addCase(fetchAdvertisementDetails.pending, (state) => {
			state.isLoading = true;
			state.error = undefined;
		});
		builder.addCase(fetchAdvertisementDetails.fulfilled, (state, action: PayloadAction<IAdvertisement>) => {
			state.isLoading = false;
			state.advertisement = action.payload;
		});
		builder.addCase(fetchAdvertisementDetails.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		});
	}
});

export const { actions: advertisementsDetailsActions } = advertisementsDetailsSlice;
export const { reducer: advertisementsDetailsReducer } = advertisementsDetailsSlice;