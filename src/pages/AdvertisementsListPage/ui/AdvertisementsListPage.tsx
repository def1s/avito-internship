import cls from './AdvertisementsListPage.module.scss';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Advertisements } from 'widgets/Advertisements';

interface AdvertisementsListPageProps {
    className?: string;
}

const AdvertisementsListPage = memo((props: AdvertisementsListPageProps) => {
	const {
		className
	} = props;
    
	return (
		<div className={classNames(cls.AdvertisementsListPage, {}, [className])}>
			Страница списка объявлений

			<Advertisements/>
		</div>
	);
});

export default AdvertisementsListPage;
