import cls from './OrdersListPage.module.scss';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

interface OrdersListPageProps {
    className?: string;
}

const OrdersListPage = memo((props: OrdersListPageProps) => {
	const {
		className
	} = props;
    
	return (
		<div className={classNames(cls.OrdersListPage, {}, [className])}>
			Страница списка заказов
		</div>
	);
});

export default OrdersListPage;
