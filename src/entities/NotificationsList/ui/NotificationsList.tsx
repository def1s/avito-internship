import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ToastNotification } from 'shared/ui/ToastNotification/ToastNotification';
import {
	getNotificationsListNotifications
} from '../model/selectors/getNotificationsListNotifications/getNotificationsListNotifications';
import { notificationsListActions } from '../model/slice/notificationsListSlice';
import cls from './NotificationsList.module.scss';

interface NotificationsProps {
	className?: string;
}

// скорее оставил бы в entities в качестве ui
export const NotificationsList = memo((props: NotificationsProps) => {
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
		<div className={classNames(cls.NotificationsList, {}, [className])}>
			{notifications.map(({ id, message, theme }) => (
				<ToastNotification message={message} theme={theme} key={id} id={id}/>
			))}
		</div>
	);
});
