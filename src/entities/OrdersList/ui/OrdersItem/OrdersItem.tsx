import { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import NotFoundIcon from 'shared/assets/icons/not_found.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { IOrder, IOrderStatus } from 'shared/types';
import { Button } from 'shared/ui/Button/Button';
import cls from './OrdersItem.module.scss';

interface OrdersItemProps {
    className?: string;
	order: IOrder;
}

// TODO вынести в shared, если понадобится где-то еще
// функция для расшифровки статусов
const getOrderStatusText = (status: IOrderStatus): string => {
	switch (status) {
	case IOrderStatus.CREATED:
		return 'Создан';
	case IOrderStatus.PAID:
		return 'Оплачен';
	case IOrderStatus.TRANSPORT:
		return 'В пути';
	case IOrderStatus.DELIVERED_TO_THE_POINT:
		return 'Доставлен в пункт выдачи';
	case IOrderStatus.RECEIVED:
		return 'Получен';
	case IOrderStatus.ARCHIVED:
		return 'Архивирован';
	case IOrderStatus.REFUND:
		return 'Возврат';
	default:
		return 'Неизвестный статус';
	}
};

export const OrdersItem = memo((props: OrdersItemProps) => {
	const {
		className,
		order
	} = props;

	const [showItems, setShowItems] = useState(false);

	const toggleShowItems = () => {
		setShowItems((prev) => !prev);
	};

	// TODO провалидировать длину всех полей
	return (
		<div className={classNames(cls.OrdersItem, {}, [className])}>
			<div className={cls.header}>
				<span className={cls.orderNumber}>Заказ #{order.id}</span>
				<span className={cls.status}>{getOrderStatusText(order.status)}</span>
			</div>

			<div className={cls.details}>
				<div className={cls.item}>
					<span>Заказ создан:</span> <span>{new Date(order.createdAt).toLocaleDateString()}</span>
				</div>
				<div className={cls.item}>
					<span>Количество:</span> <span>{order.items.length}</span>
				</div>
				<div className={cls.item}>
					<span>Сумма:</span> <span>${order.total}</span>
				</div>
			</div>

			<Button onClick={toggleShowItems}>
				{showItems ? 'Скрыть товары' : 'Показать товары'}
			</Button>

			{showItems && (
				<div className={cls.itemsList}>
					{order.items.map((item) => (
						<Link
							key={item.id}
							className={cls.itemDetail}
							to={`/advertisements/${item.id}`}
						>

							<div className={cls.imageWrapper}>
								{
									item.imageUrl ?
										<img
											src={item.imageUrl}
											alt={item.name}
											className={cls.image}
										/> :
										<NotFoundIcon
											className={cls.notFoundIcon}
										/>
								}
							</div>

							<span>{item.name}</span> - <span>Кол-во: {item.count}</span>

						</Link>
					))}
				</div>
			)}
		</div>
	);
});
