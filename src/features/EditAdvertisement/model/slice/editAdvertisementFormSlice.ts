import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAdvertisementForm } from 'shared/types';
import {
	editUserAdvertisement
} from '../services/editUserAdvertisement/editUserAdvertisement';
import { EditAdvertisementFormSchema } from '../types/editAdvertisementFormSchema';

const initialState: EditAdvertisementFormSchema = {
	advertisementForm: {
		name: '',
		description: '',
		// TODO баг, при котором всегда появляется 0 в начале цены или не уходит вовсе
		price: 0,
		imageUrl: ''
	},
	isLoading: false
};

const editAdvertisementFormSlice = createSlice({
	name: 'editAdvertisementFormSlice',
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
		builder.addCase(editUserAdvertisement.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(editUserAdvertisement.fulfilled, (state) => {
			state.isLoading = false;
		});
		builder.addCase(editUserAdvertisement.rejected, (state) => {
			state.isLoading = false;
		});
	}
});

export const { actions: editAdvertisementFormActions } = editAdvertisementFormSlice;
export const { reducer: editAdvertisementFormReducer } = editAdvertisementFormSlice;