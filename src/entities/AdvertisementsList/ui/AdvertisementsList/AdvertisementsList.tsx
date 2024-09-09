import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { IAdvertisement } from 'shared/types';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { AdvertisementsItem } from '../AdvertisementsItem/AdvertisementsItem';
import cls from './AdvertisementsList.module.scss';

interface AdvertisementsListProps {
    className?: string;
	advertisements: IAdvertisement[];
	isLoading: boolean;
	error?: string
}

export const AdvertisementsList = memo((props: AdvertisementsListProps) => {
	const {
		className,
		advertisements,
		isLoading,
		error
	} = props;

	const renderAdvertisementsList = useCallback(() => {
		if (isLoading) {
			// TODO вставить Loader
			return 'Загрузка...';
		} else if (error) {
			return (
				<Text
					title={error}
					text='Попробуйте перезагрузить страницу'
					theme={TextTheme.ERROR}
					align={TextAlign.CENTER}
					className={cls.error}
				/>
			);
		} else if (advertisements.length === 0) {
			return (
				<Text
					title='У вас еще нет объявлений!'
					text='Вы можете добавить их с помощью специальной формы'
					align={TextAlign.CENTER}
					className={cls.error}
				/>
			);
		} else {
			return (
				advertisements.map((adv) => (
					<AdvertisementsItem advertisement={adv} key={adv.id} />
				))
			);
		}
	}, [advertisements, error, isLoading]);

	return (
		<div className={classNames(cls.AdvertisementsList, {}, [className])}>
			{renderAdvertisementsList()}
		</div>
	);
});
