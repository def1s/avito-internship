import { FC, memo, useCallback } from 'react';
import { SortSelector } from 'entities/OrdersList/ui/SortSelector/SortSelector';
import { classNames } from 'shared/lib/classNames/classNames';
import { IOrder, IOrderStatus } from 'shared/types';
import { Blur } from 'shared/ui/Blur/Blur';
import { Loader } from 'shared/ui/Loader/Loader';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { FilterSelector } from '../FilterSelector/FilterSelector';
import { OrdersItem } from '../OrdersItem/OrdersItem';
import cls from './OrdersList.module.scss';

interface OrdersListProps {
	className?: string;
	orders?: IOrder[];
	isLoading?: boolean;
	error?: string;
	filter?: IOrderStatus;
	// фича для завершения заказа
	CompleteOrderFeature?: FC<{ id: number }>;
}

export const OrdersList: FC<OrdersListProps> = memo((props: OrdersListProps) => {
	const {
		className,
		orders = [], // для безопасности ставим по-умолчанию пустой массив
		isLoading = false,
		error,
		CompleteOrderFeature,
		filter
	} = props;

	const renderOrdersList = useCallback(() => {
		if (error) return null; // уже обрабатывается в блокe ошибки

		if (orders.length === 0 && !isLoading && filter === undefined) {
			return (
				<Text
					title='У вас еще нет заказов!'
					text='Подождите, пока кто-нибудь совершит покупку по вашему объявлению'
					align={TextAlign.CENTER}
					className={cls.error}
				/>
			);
		}

		if (orders.length === 0 && !isLoading && filter !== undefined) {
			return (
				<Text
					title='Ничего не найдено!'
					text='Попробуйте выбрать другой фильтр'
					align={TextAlign.CENTER}
					className={cls.error}
				/>
			);
		}

		return orders.map((order) => (
			<OrdersItem order={order} key={order.id} CompleteOrderFeature={CompleteOrderFeature} />
		));
	}, [error, orders, isLoading, filter, CompleteOrderFeature]);

	return (
		<div className={classNames(cls.OrdersList, {}, [className])}>
			{isLoading && (
				<>
					<Loader className={cls.loader} />
					<Blur className={cls.blur} />
				</>
			)}

			<div className={cls.additionalWrapper}>
				<FilterSelector/>
				<SortSelector/>
			</div>

			{error && (
				<Text
					title={error}
					text='Попробуйте перезагрузить страницу'
					theme={TextTheme.ERROR}
					align={TextAlign.CENTER}
					className={cls.error}
				/>
			)}

			{renderOrdersList()}
		</div>
	);
});
