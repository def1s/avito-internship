import { IAdvertisement } from 'shared/types';

export type IAdvertisementForm = Omit<IAdvertisement, 'id' | 'views' | 'likes' | 'createdAt'>

export interface CreateAdvertisementFormSchema {
	advertisementForm: IAdvertisementForm;
	isLoading: boolean;
	error?: string;
}