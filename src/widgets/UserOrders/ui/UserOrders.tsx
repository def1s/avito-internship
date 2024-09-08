import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
	fetchOrders,
	getOrdersListError,
	getOrdersListIsLoading,
	getOrdersListOrders,
	OrdersList,
	ordersListReducer
} from 'entities/OrdersList';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
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

	useEffect(() => {
		dispatch(fetchOrders());
	}, [dispatch]);

	const orders = useSelector(getOrdersListOrders);
	const isLoading = useSelector(getOrdersListIsLoading);
	const error = useSelector(getOrdersListError);
    
	return (
		<DynamicModuleLoader
			reducers={initialReducers}
			removeAfterUnmount
		>

			<div className={classNames(cls.UserOrders, {}, [className])}>
				<OrdersList
					orders={orders || []}
					isLoading={isLoading}
					error={error}
				/>
			</div>

		</DynamicModuleLoader>
	);
});
