import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { IAdvertisement } from 'shared/types';
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
			// TODO вставить компонент ошибки или кастомный текст
			return error;
		} else if (advertisements.length === 0) {
			// TODO вставить кастомный текст
			return 'У вас еще нет объявлений';
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
