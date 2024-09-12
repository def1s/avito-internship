import { Action, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { Axios } from 'axios';
import { CreateAdvertisementFormSchema } from 'features/CreateAdvertisement';
import { EditAdvertisementFormSchema } from 'features/EditAdvertisement';
import { AdvertisementDetailsSchema } from 'entities/AdvertisementDetails';
import { AdvertisementsListSchema } from 'entities/AdvertisementsList';
import { NotificationsListSchema } from 'entities/NotificationsList';
import { OrdersListSchema } from 'entities/OrdersList';

export interface StateSchema {
	notificationsList: NotificationsListSchema;

	advertisementsList?: AdvertisementsListSchema;
	ordersList?: OrdersListSchema;
	advertisementDetails?: AdvertisementDetailsSchema;
	createAdvertisementForm?: CreateAdvertisementFormSchema;
	editAdvertisementForm?: EditAdvertisementFormSchema;
}

export type StateSchemaKey = keyof StateSchema;

// описание того, что возвращает reducer manager
export interface ReducerManager {
	getReducerMap: () => ReducersMapObject<StateSchema>;
	reduce: (state: StateSchema, action: Action) => StateSchema;
	add: (key: StateSchemaKey, reducer: Reducer) => void;
	remove: (key: StateSchemaKey) => void;
}

// расширение стандартных полей store
export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
	reducerManager: ReducerManager
}

export interface ThunkConfig<T> {
	rejectValue: T;
	state: StateSchema;
}