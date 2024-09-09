import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { IOrder } from 'shared/types';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
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
			return (
				<Text
					title={error}
					text='Попробуйте перезагрузить страницу'
					theme={TextTheme.ERROR}
					align={TextAlign.CENTER}
					className={cls.error}
				/>
			);
		} else if (orders.length === 0) {
			return (
				<Text
					title='У вас еще нет заказов!'
					text='Подождите, пока кто-нибудь совершит покупку по вашему объявлению'
					align={TextAlign.CENTER}
					className={cls.error}
				/>
			);
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
