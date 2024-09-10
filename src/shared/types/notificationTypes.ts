export enum NotificationTypes {
	ERROR = 'error',
	SUCCESS = 'success'
}

export interface INotification {
	id: number;
	message: string;
	theme?: NotificationTypes;
}