import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getNotificationsListNotifications, notificationsListActions } from 'entities/NotificationsList';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { ToastNotification } from 'shared/ui/ToastNotification/ToastNotification';
import cls from './Notifications.module.scss';

interface NotificationsProps {
	className?: string;
}

export const Notifications = memo((props: NotificationsProps) => {
	const { className } = props;

	const dispatch = useAppDispatch();
	const notifications = useSelector(getNotificationsListNotifications);

	useEffect(() => {
		notifications.forEach((notification) => {
			const timer = setTimeout(() => {
				dispatch(notificationsListActions.removeNotification(notification.id));
			}, 5000);

			// очистка таймера, если компонент размонтируется
			return () => clearTimeout(timer);
		});
	}, [dispatch, notifications]);

	return (
		<div className={classNames(cls.Notifications, {}, [className])}>
			{notifications.map(({ id, message, theme }) => (
				<ToastNotification message={message} theme={theme} key={id} id={id}/>
			))}
		</div>
	);
});
