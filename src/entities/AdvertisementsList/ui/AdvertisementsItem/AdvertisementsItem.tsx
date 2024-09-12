import { memo } from 'react';
import { Link } from 'react-router-dom';
import HeartIcon from 'shared/assets/icons/heart.svg';
import NotFoundIcon from 'shared/assets/icons/not_found.svg';
import ViewIcon from 'shared/assets/icons/view.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { formatNumber } from 'shared/lib/formatNumber/formatNumber';
import { numberLengthValidator } from 'shared/lib/lengthValidators/numberLengthValidator';
import { textLengthValidator } from 'shared/lib/lengthValidators/textLengthValidator';
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

			<div className={cls.name}>{textLengthValidator(advertisement.name, 37)}</div>

			{/* TODO провалидировать длину цены */}
			<div className={cls.price}>{formatNumber(advertisement.price || 0)} ₽</div>

			<div className={cls.additionalInfo}>
				<div className={cls.likes}>
					<HeartIcon className={cls.heart}/>
					{numberLengthValidator(advertisement.likes, 999999)}
				</div>
				<div className={cls.views}>
					<ViewIcon className={cls.view}/>
					{numberLengthValidator(advertisement.views, 999999)}
				</div>
			</div>

		</Link>
	);
});
