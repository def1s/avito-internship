import cls from './UserOrdersPage.module.scss';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { UserOrders } from 'widgets/UserOrders';

interface UserOrdersPageProps {
    className?: string;
}

const UserOrdersPage = memo((props: UserOrdersPageProps) => {
	const {
		className
	} = props;
    
	return (
		<div className={classNames(cls.UserOrdersPage, {}, [className])}>
			Страница списка заказов

			<UserOrders/>
		</div>
	);
});

export default UserOrdersPage;
