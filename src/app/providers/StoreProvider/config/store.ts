import { configureStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { notificationsListReducer } from 'entities/NotificationsList';
import { createReducerManager } from './reducerManager';
import { StateSchema } from './StateSchema';

export const configureReduxStore = (
	initialState?: StateSchema,
	asyncReducers?: ReducersMapObject<StateSchema>
) => {
	// на вход идут основные редьюсеры и асинхронные
	const rootReducers: ReducersMapObject<StateSchema> = {
		...asyncReducers,
		notificationsList: notificationsListReducer
	};

	// создаю менеджер
	const reducerManager = createReducerManager(rootReducers);

	const store = configureStore<StateSchema>({
		reducer: reducerManager.reduce as Reducer<StateSchema>, // беру редьюсер из менеджера
		devTools: __IS_DEV__,
		preloadedState: initialState
	});

	// eslint-disable-next-line
	// @ts-expect-error
	store.reducerManager = reducerManager;

	return store;
};

export type AppDispatch = ReturnType<typeof configureReduxStore>['dispatch'];