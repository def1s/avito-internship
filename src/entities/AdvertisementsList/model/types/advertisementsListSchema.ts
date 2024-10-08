import { IAdvertisement } from 'shared/types';

export interface AdvertisementsListSchema {
	advertisements: IAdvertisement[];
	isLoading: boolean;
	error?: string;
	start: number;
	limit: number;
	offset: number;
	isEnd: boolean;
	searchStr: string;
}