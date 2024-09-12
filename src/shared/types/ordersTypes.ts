import { IAdvertisement } from './advertisementTypes';

export type IOrderItem = IAdvertisement & { count: number; };

export enum IOrderStatus {
	CREATED = 0,
	PAID = 1,
	TRANSPORT = 2,
	DELIVERED_TO_THE_POINT = 3,
	RECEIVED = 4,
	ARCHIVED = 5,
	REFUND = 6
}

export interface IOrder {
	/* Уникальный идентификатор. */
	id: string;
	/* Статус. */
	status: typeof IOrderStatus[keyof typeof IOrderStatus];
	/* Дата и время создания. */
	createdAt: string;
	/* Дата и время завершения. */
	finishedAt?: string;
	/* Товары в заказе. */
	items: Array<IOrderItem>;
	/* Способ доставки(Почта, СДЭК...) */
	deliveryWay: string;
	/* Сумма заказа */
	total: number;
}