import cls from './AdvertisementsItem.module.scss';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { IAdvertisement } from 'shared/types';

interface AdvertisementsItemProps {
    className?: string;
	advertisement: IAdvertisement
}

export const AdvertisementsItem = memo((props: AdvertisementsItemProps) => {
	const {
		className,
		advertisement
	} = props;
    
	return (
		<div className={classNames(cls.AdvertisementsItem, {}, [className])}>
			{advertisement.name}
		</div>
	);
});
