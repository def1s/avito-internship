import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { IOrder } from 'shared/types';
import { OrdersItem } from '../OrdersItem/OrdersItem';
import cls from './OrdersList.module.scss';

interface OrdersListProps {
    className?: string;
	orders: IOrder[];
	isLoading: boolean;
	error?: string
}

export const OrdersList = memo((props: OrdersListProps) => {
	const {
		className,
		orders,
		isLoading,
		error
	} = props;

	const renderOrdersList = useCallback(() => {
		if (isLoading) {
			// TODO вставить Loader
			return 'Загрузка...';
		} else if (error) {
			// TODO вставить компонент ошибки или кастомный текст
			return error;
		} else if (orders.length === 0) {
			// TODO вставить кастомный текст
			return 'У вас еще нет заказов';
		} else {
			return orders.map((order) => (
				<OrdersItem order={order} key={order.id}/>
			));
		}
	}, [error, isLoading, orders]);

	return (
		<div className={classNames(cls.OrdersList, {}, [className])}>
			{renderOrdersList()}
		</div>
	);
});
