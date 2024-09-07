import cls from './AdvertisementsList.module.scss';
import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { IAdvertisement } from 'shared/types';
import { AdvertisementCard } from '../AdvertisementCard/AdvertisementCard';

interface AdvertisementsListProps {
    className?: string;
	data: IAdvertisement[];
	isLoading: boolean;
	error?: string
}

export const AdvertisementsList = memo((props: AdvertisementsListProps) => {
	const {
		className,
		data,
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
		} else if (data.length === 0) {
			// TODO вставить кастомный текст
			return 'У вас еще нет объявлений';
		} else {
			return (
				data.map((adv) => (
					<AdvertisementCard data={adv} key={adv.id} />
				))
			);
		}
	}, [data, error, isLoading]);

	return (
		<div className={classNames(cls.AdvertisementsList, {}, [className])}>
			{renderAdvertisementsList()}
		</div>
	);
});
