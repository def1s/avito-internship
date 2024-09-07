import { IAdvertisement } from 'shared/types';

export interface AdvertisementsListSchema {
	data: IAdvertisement[];
	isLoading: boolean;
	error?: string;
}