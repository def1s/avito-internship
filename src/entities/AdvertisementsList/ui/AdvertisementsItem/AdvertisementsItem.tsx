import { memo } from 'react';
import { Link } from 'react-router-dom';
import HeartIcon from 'shared/assets/icons/heart.svg';
import ViewIcon from 'shared/assets/icons/view.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { formatNumber } from 'shared/lib/formatNumber/formatNumber';
import { numberLengthValidator } from 'shared/lib/lengthValidators/numberLengthValidator';
import { textLengthValidator } from 'shared/lib/lengthValidators/textLengthValidator';
import { IAdvertisement } from 'shared/types';
import { Image, ImageObjectFit } from 'shared/ui/Image/Image';
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
			<Image
				url={advertisement.imageUrl}
				className={cls.imageWrapper}
				objectFit={ImageObjectFit.COVER}
			/>

			<div className={cls.name}>{textLengthValidator(advertisement.name, 37)}</div>

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
