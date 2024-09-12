import { INotification } from 'shared/types';

export interface NotificationsListSchema {
	notifications: INotification[];
	idCounter: number;
}