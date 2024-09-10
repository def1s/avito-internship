import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { INotification } from 'shared/types';
import { NotificationsListSchema } from '../types/notificationsListSchema';

const initialState: NotificationsListSchema = {
	notifications: [],
	idCounter: 1
};

const notificationsListSlice = createSlice({
	name: 'notificationsList',
	initialState,
	reducers: {
		addNotification: (state, action: PayloadAction<Omit<INotification, 'id'>>) => {
			const id = state.idCounter;
			state.notifications.push({ ...action.payload, id });
			state.idCounter += 1;
		},
		removeNotification: (state, action: PayloadAction<number>) => {
			state.notifications = state.notifications.filter(notification => notification.id !== action.payload);
		}
	}
});

export const { actions: notificationsListActions } = notificationsListSlice;
export const { reducer: notificationsListReducer } = notificationsListSlice;
