import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { IAdvertisement } from 'shared/types';
import cls from './AdvertisementDetails.module.scss';

interface AdvertisementDetailsProps {
    className?: string;
	advertisement: IAdvertisement;
	isLoading: boolean;
	error?: string
}

export const AdvertisementDetails = memo((props: AdvertisementDetailsProps) => {
	const {
		className,
		advertisement,
		isLoading,
		error
	} = props;

	const renderAdvertisementDetails = () => {
		if (isLoading) {
			// TODO вставить Loader
			return 'Загрузка...';
		} else if (error) {
			// TODO вставить кастомный текст
			return 'Произошла ошибка';
		} else {
			return (
				<>
					{/* изображение */}
					<div className={cls.imageWrapper}>
						{advertisement.imageUrl && <img src={advertisement.imageUrl} alt={advertisement.name} className={cls.image}/>}
					</div>

					{/* заголовок и цена */}
					<div className={cls.info}>
						<h1 className={cls.title}>{advertisement.name}</h1>
						<p className={cls.price}>{advertisement.price} ₽</p>
					</div>

					{/* описание */}
					{advertisement.description && <p className={cls.description}>{advertisement.description}</p>}

					{/* метаданные */}
					<div className={cls.meta}>
						<p>Создано: {advertisement.createdAt}</p>
						<p>Просмотры: {advertisement.views}</p>
						<p>Лайки: {advertisement.likes}</p>
					</div>
				</>
			);
		}
	};
    
	return (
		<div className={classNames(cls.AdvertisementDetails, {}, [className])}>
			{renderAdvertisementDetails()}
		</div>
	);
});
