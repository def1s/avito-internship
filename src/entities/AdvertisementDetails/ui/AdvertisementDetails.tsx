import { memo, ReactNode, useState } from 'react';
import NotFoundIcon from 'shared/assets/icons/not_found.svg';
import { MAX_DESCRIPTION_LENGTH } from 'shared/const/variables';
import { classNames } from 'shared/lib/classNames/classNames';
import { formatDate } from 'shared/lib/formatDate/formatDate';
import { formatNumber } from 'shared/lib/formatNumber/formatNumber';
import { textLengthValidator } from 'shared/lib/lengthValidators/textLengthValidator';
import { IAdvertisement } from 'shared/types';
import { Loader } from 'shared/ui/Loader/Loader';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import cls from './AdvertisementDetails.module.scss';

interface AdvertisementDetailsProps {
	className?: string;
	advertisement: IAdvertisement;
	isLoading: boolean;
	error?: string;
	// опциональная кнопка для редактирования
	EditFeature?: ReactNode;
}

export const AdvertisementDetails = memo((props: AdvertisementDetailsProps) => {
	const {
		className,
		advertisement,
		isLoading,
		error,
		EditFeature,
	} = props;

	const [isExpanded, setIsExpanded] = useState(false);

	const toggleExpanded = () => {
		setIsExpanded((prev) => !prev);
	};

	const renderAdvertisementDetails = () => {
		if (isLoading) {
			return <Loader className={cls.loader} />;
		} else if (error) {
			return (
				<Text
					title={error}
					text="Попробуйте перезагрузить страницу"
					theme={TextTheme.ERROR}
					align={TextAlign.CENTER}
				/>
			);
		} else {
			return (
				<>
					{/* изображение */}
					<div className={cls.imageWrapper}>
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

					{/* основная информация */}
					<div className={cls.infoWrapper}>
						<div className={cls.mainInfo}>
							<h1 className={cls.title}>{advertisement.name}</h1>
							<p className={cls.price}>
								{formatNumber(advertisement.price || 0)} ₽
							</p>
						</div>

						{/* описание */}
						{advertisement.description && (
							<p className={cls.description}>
								{isExpanded ? advertisement.description : textLengthValidator(advertisement.description, MAX_DESCRIPTION_LENGTH)}
								{
									advertisement.description.length > MAX_DESCRIPTION_LENGTH &&
									<span className={cls.toggleButton} onClick={toggleExpanded}>
										{isExpanded ? 'Свернуть' : 'Читать далее'}
									</span>
								}
							</p>
						)}

						{/* дополнительная информация */}
						<div className={cls.meta}>
							<p>Создано: {formatDate(new Date(advertisement.createdAt))}</p>
							<p>Просмотры: {advertisement.views}</p>
							<p>Лайки: {advertisement.likes}</p>
						</div>

						{EditFeature}
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
