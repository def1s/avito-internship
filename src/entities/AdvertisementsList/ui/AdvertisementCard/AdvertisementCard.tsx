import cls from './AdvertisementCard.module.scss';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { IAdvertisement } from 'shared/types';

interface AdvertisementCardProps {
    className?: string;
	data: IAdvertisement
}

export const AdvertisementCard = memo((props: AdvertisementCardProps) => {
	const {
		className,
		data
	} = props;
    
	return (
		<div className={classNames(cls.AdvertisementsCard, {}, [className])}>
			{data.name}
		</div>
	);
});
