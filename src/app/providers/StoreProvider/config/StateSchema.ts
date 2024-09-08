import { Action, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { CreateAdvertisementFormSchema } from 'features/CreateAdvertisement';
import { AdvertisementDetailsSchema } from 'entities/AdvertisementDetails';
import { AdvertisementsListSchema } from 'entities/AdvertisementsList';
import { OrdersListSchema } from 'entities/OrdersList';

export interface StateSchema {
	advertisementsList?: AdvertisementsListSchema;
	ordersList?: OrdersListSchema;
	advertisementDetails?: AdvertisementDetailsSchema;
	createAdvertisementForm?: CreateAdvertisementFormSchema;
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