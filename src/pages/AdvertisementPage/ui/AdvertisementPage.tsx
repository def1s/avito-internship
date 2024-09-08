import { memo } from 'react';
import { UserAdvertisement } from 'widgets/UserAdvirtisement';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AdvertisementPage.module.scss';

interface AdvertisementPageProps {
    className?: string;
}

const AdvertisementPage = memo((props: AdvertisementPageProps) => {
	const {
		className
	} = props;

	return (
		<div className={classNames(cls.AdvertisementPage, {}, [className])}>
			<UserAdvertisement/>
		</div>
	);
});

export default AdvertisementPage;
