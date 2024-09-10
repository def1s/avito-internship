import React from 'react';
import { classNames } from '../../lib/classNames/classNames';
import { INotification, NotificationTypes } from '../../types';
import cls from './ToastNotification.module.scss';

interface ToastNotificationProps extends INotification {
	className?: string;
}

export const ToastNotification = (props: ToastNotificationProps) => {
	const {
		message,
		className,
		theme = NotificationTypes.SUCCESS
	} = props;
	
	return (
		<div className={classNames(cls.ToastNotification, {}, [className, cls[theme]])}>
			{message}
		</div>
	);
};
