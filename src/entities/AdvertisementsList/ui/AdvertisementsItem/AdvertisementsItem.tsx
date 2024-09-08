import { memo } from 'react';
import { Link } from 'react-router-dom';
import NotFoundIcon from 'shared/assets/icons/not_found.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { IAdvertisement } from 'shared/types';
import cls from './AdvertisementsItem.module.scss';

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
		<Link
			className={classNames(cls.AdvertisementsItem, {}, [className])}
			to={`/advertisements/${advertisement.id}`}
		>
			<div
				className={cls.imageWrapper}
			>
				{
					advertisement.imageUrl ?
						<img
							className={cls.image}
							src={advertisement.imageUrl}
							alt={advertisement.name}
						/> :
						<NotFoundIcon className={cls.notFoundIcon}/>
				}

			</div>

			{/* TODO добавить валидацию на длину для всех полей */}
			<div className={cls.name}>{advertisement.name}</div>

			{/* TODO добавить разделение для отображения цены */}
			<div className={cls.price}>{advertisement.price}₽</div>

			<div className={cls.additionalInfo}>
				<div className={cls.likes}>{advertisement.likes}</div>
				<div className={cls.views}>{advertisement.views}</div>
			</div>

		</Link>
	);
});
