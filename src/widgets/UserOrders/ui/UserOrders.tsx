import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { CompleteOrder } from 'features/CompleteOrder';
import {
	fetchOrders,
	getOrdersListError,
	getOrdersListFilter,
	getOrdersListIsLoading,
	getOrdersListOrders, getOrdersListSort,
	OrdersList,
	ordersListReducer
} from 'entities/OrdersList';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text } from 'shared/ui/Text/Text';
import cls from './UserOrders.module.scss';

interface UserOrdersProps {
    className?: string;
}

const initialReducers: ReducersList = {
	ordersList: ordersListReducer
};

export const UserOrders = memo((props: UserOrdersProps) => {
	const {
		className
	} = props;

	const dispatch = useAppDispatch();
	const filter = useSelector(getOrdersListFilter);
	const sort = useSelector(getOrdersListSort);

	useEffect(() => {
		dispatch(fetchOrders());
	}, [dispatch, filter, sort]);

	const orders = useSelector(getOrdersListOrders);
	const isLoading = useSelector(getOrdersListIsLoading);
	const error = useSelector(getOrdersListError);
    
	return (
		<DynamicModuleLoader
			reducers={initialReducers}
			removeAfterUnmount
		>

			<div className={classNames(cls.UserOrders, {}, [className])}>
				<div className={cls.wrapper}>
					<Text
						title='Заказы'
						text='На этой странице отображаются все твои заказы'
					/>
				</div>

				<OrdersList
					orders={orders}
					isLoading={isLoading}
					error={error}
					CompleteOrderFeature={CompleteOrder}
					filter={filter}
				/>
			</div>

		</DynamicModuleLoader>
	);
});
