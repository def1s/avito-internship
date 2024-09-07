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
			<div
				className={cls.imageWrapper}
			>
				{/* TODO прикрутить проверку на изображение */}
				<img
					className={cls.image}
					src={advertisement.imageUrl}
					alt={advertisement.name}
				/>
			</div>

			{/* TODO добавить валидацию на длину для всех полей */}
			<div className={cls.name}>{advertisement.name}</div>

			<div className={cls.price}>{advertisement.price}₽</div>

			<div className={cls.additionalInfo}>
				<div className={cls.likes}>{advertisement.likes}</div>
				<div className={cls.views}>{advertisement.views}</div>
			</div>

		</div>
	);
});
