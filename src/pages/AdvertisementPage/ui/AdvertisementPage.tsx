import cls from './AdvertisementPage.module.scss';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

interface AdvertisementPageProps {
    className?: string;
}

const AdvertisementPage = memo((props: AdvertisementPageProps) => {
	const {
		className
	} = props;

	return (
		<div className={classNames(cls.AdvertisementPage, {}, [className])}>
			Страница объявления
		</div>
	);
});

export default AdvertisementPage;
