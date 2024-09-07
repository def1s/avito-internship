import cls from './OrdersItem.module.scss';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { IOrder } from 'shared/types';

interface OrdersItemProps {
    className?: string;
	order: IOrder;
}

export const OrdersItem = memo((props: OrdersItemProps) => {
	const {
		className,
		order
	} = props;
    
	return (
		<div className={classNames(cls.OrdersItem, {}, [className])}>
			{order.id}
		</div>
	);
});
