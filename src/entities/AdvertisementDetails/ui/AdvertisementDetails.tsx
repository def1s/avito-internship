import { memo, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { formatNumber } from 'shared/lib/formatNumber/formatNumber';
import { IAdvertisement } from 'shared/types';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import cls from './AdvertisementDetails.module.scss';

interface AdvertisementDetailsProps {
    className?: string;
	advertisement: IAdvertisement;
	isLoading: boolean;
	error?: string
	// опциональная кнопка для редактирования
	EditFeature?: ReactNode;
}

export const AdvertisementDetails = memo((props: AdvertisementDetailsProps) => {
	const {
		className,
		advertisement,
		isLoading,
		error,
		EditFeature
	} = props;

	const renderAdvertisementDetails = () => {
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
				/>
			);
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
						<p className={cls.price}>{formatNumber(advertisement.price)} ₽</p>
					</div>

					{/* TODO скрывать слишком длинное описание под хайд */}
					{/* описание */}
					{advertisement.description && <p className={cls.description}>{advertisement.description}</p>}

					{/* метаданные */}
					<div className={cls.meta}>
						<p>Создано: {advertisement.createdAt}</p>
						<p>Просмотры: {advertisement.views}</p>
						<p>Лайки: {advertisement.likes}</p>
					</div>

					{EditFeature}
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
