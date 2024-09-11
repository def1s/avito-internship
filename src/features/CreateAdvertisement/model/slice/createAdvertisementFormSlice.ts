import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAdvertisementForm } from 'shared/types';
import {
	createAdvertisementForUser
} from '../services/createAdvertisementForUser/createAdvertisementForUser';
import { CreateAdvertisementFormSchema } from '../types/createAdvertisementFormSchema';

const initialState: CreateAdvertisementFormSchema = {
	advertisementForm: {
		name: '',
		description: '',
		// TODO баг, при котором всегда появляется 0 в начале цены или не уходит вовсе
		price: 0,
		imageUrl: ''
	},
	isLoading: false
};

const createAdvertisementFormSlice = createSlice({
	name: 'createAdvertisementForm',
	initialState,
	reducers: {
		// использую Partial, чтобы указать, что нужны не все поля
		updateAdvertisementForm: (state, action: PayloadAction<Partial<IAdvertisementForm>>) => {
			state.advertisementForm = {
				...state.advertisementForm,
				...action.payload
			};
		}
	},
	extraReducers: (builder) => {
		builder.addCase(createAdvertisementForUser.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(createAdvertisementForUser.fulfilled, (state) => {
			state.isLoading = false;
		});
		builder.addCase(createAdvertisementForUser.rejected, (state, action) => {
			state.isLoading = false;
		});
	}
});

export const { actions: createAdvertisementFormActions } = createAdvertisementFormSlice;
export const { reducer: createAdvertisementFormReducer } = createAdvertisementFormSlice;