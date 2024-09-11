import { IOrderStatus } from 'shared/types';

export const filters: Record<IOrderStatus, string> = {
	[IOrderStatus.PAID]: 'Оплаченные',
	[IOrderStatus.CREATED]: 'Созданные',
	[IOrderStatus.ARCHIVED]: 'Архивированные',
	[IOrderStatus.DELIVERED_TO_THE_POINT]: 'Доставленные в пункт выдачи',
	[IOrderStatus.RECEIVED]: 'Полученные',
	[IOrderStatus.TRANSPORT]: 'В доставке',
	[IOrderStatus.REFUND]: 'Возвращенные'
};