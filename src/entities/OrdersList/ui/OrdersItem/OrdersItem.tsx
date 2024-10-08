import { FC, memo, useState } from 'react';
import { Link } from 'react-router-dom';
import NotFoundIcon from 'shared/assets/icons/not_found.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { formatDate } from 'shared/lib/formatDate/formatDate';
import { formatNumber } from 'shared/lib/formatNumber/formatNumber';
import { IOrder, IOrderStatus } from 'shared/types';
import { Button } from 'shared/ui/Button/Button';
import cls from './OrdersItem.module.scss';

interface OrdersItemProps {
    className?: string;
	order: IOrder;
	// фича для завершения заказа
	CompleteOrderFeature?: FC<{ id: number }>;
}

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
		order,
		CompleteOrderFeature
	} = props;

	const [showItems, setShowItems] = useState(false);

	const toggleShowItems = () => {
		setShowItems((prev) => !prev);
	};

	// функция для рендеринга заголовка и статуса заказа, можно вынести в отдельный компонент!
	const renderHeader = (order: IOrder) => (
		<div className={cls.header}>
			<span className={cls.orderNumber}>Заказ #{order.id}</span>
			<span className={cls.status}>{getOrderStatusText(order.status)}</span>
		</div>
	);

	// функция для рендеринга деталей заказа, можно вынести в отдельный компонент!
	const renderDetails = (order: IOrder) => (
		<div className={cls.details}>
			<div className={cls.item}>
				<span>Заказ создан:</span> <span>{formatDate(new Date(order.createdAt))}</span>
			</div>
			<div className={cls.item}>
				<span>Количество товаров:</span> <span>{order.items.length}</span>
			</div>
			<div className={cls.item}>
				<span>Сумма:</span> <span>{formatNumber(order.total)} ₽</span>
			</div>

			{
				(order.status === IOrderStatus.RECEIVED ||
				order.status === IOrderStatus.ARCHIVED) &&
				order.finishedAt &&
				<div className={cls.item}>
					<span>Заказ завершен:</span> <span>{formatDate(new Date(order.finishedAt))}</span>
				</div>
			}
			<div className={cls.item}>
				<span>Способ доставки:</span> <span>{order.deliveryWay.toUpperCase()}</span>
			</div>
		</div>
	);

	// функция для рендеринга списка товаров, можно вынести в отдельный компонент!
	const renderItemsList = (order: IOrder) => (
		<div className={cls.itemsList}>
			{order.items.map((item) => (
				<Link
					key={item.id}
					className={cls.itemDetail}
					to={`/advertisements/${item.id}`}
				>
					<div className={cls.imageWrapper}>
						{
							item.imageUrl ? (
								<img src={item.imageUrl} alt={item.name} className={cls.image} />
							) : (
								<NotFoundIcon className={cls.notFoundIcon} />
							)
						}
					</div>
					<span>{item.name}</span> - <span>Кол-во: {item.count}</span>
				</Link>
			))}
		</div>
	);

	return (
		<div className={classNames(cls.OrdersItem, {}, [className])}>
			{renderHeader(order)}
			{renderDetails(order)}
			<div className={cls.buttonsWrapper}>
				<Button onClick={toggleShowItems}>
					{showItems ? 'Скрыть товары' : 'Показать товары'}
				</Button>

				{
					order.status !== IOrderStatus.RECEIVED &&
					order.status !== IOrderStatus.ARCHIVED &&
					CompleteOrderFeature &&
					<CompleteOrderFeature id={Number(order.id)}/>
				}
			</div>

			{showItems && renderItemsList(order)}
		</div>
	);
});
