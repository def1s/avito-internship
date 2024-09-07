import cls from './NotFoundPage.module.scss';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage = memo((props: NotFoundPageProps) => {
	const {
		className
	} = props;
    
	return (
		<div className={classNames(cls.NotFoundPage, {}, [className])}>
			Запрашиваемая страница не существует.
		</div>
	);
});
