import { memo } from 'react';
import { UserOrders } from 'widgets/UserOrders';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './OrdersPage.module.scss';

interface OrdersPageProps {
    className?: string;
}

const OrdersPage = memo((props: OrdersPageProps) => {
	const {
		className
	} = props;
    
	return (
		<div className={classNames(cls.OrdersPage, {}, [className])}>
			<UserOrders/>
		</div>
	);
});

export default OrdersPage;
