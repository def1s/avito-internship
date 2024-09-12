import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage = memo((props: NotFoundPageProps) => {
	const {
		className
	} = props;
    
	return (
		<div className={classNames(cls.NotFoundPage, {}, [className])}>
			<Text
				title='Запрашиваемая страница не существует'
				text='Если вы попали сюда по ссылке, то адрес недействителен'
				theme={TextTheme.ERROR}
				align={TextAlign.CENTER}
			/>
		</div>
	);
});
