import { memo } from 'react';
import { UserAdvertisements } from 'widgets/UserAdvertisements';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AdvertisementsPage.module.scss';

interface AdvertisementsPageProps {
    className?: string;
}

const AdvertisementsPage = memo((props: AdvertisementsPageProps) => {
	const {
		className
	} = props;
    
	return (
		<div className={classNames(cls.AdvertisementsPage, {}, [className])}>
			<UserAdvertisements/>
		</div>
	);
});

export default AdvertisementsPage;
