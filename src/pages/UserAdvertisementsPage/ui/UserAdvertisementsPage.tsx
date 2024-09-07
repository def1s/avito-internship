import cls from './UserAdvertisementsPage.module.scss';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { UserAdvertisements } from 'widgets/UserAdvertisements';

interface UserAdvertisementsPageProps {
    className?: string;
}

const UserAdvertisementsPage = memo((props: UserAdvertisementsPageProps) => {
	const {
		className
	} = props;
    
	return (
		<div className={classNames(cls.UserAdvertisementsPage, {}, [className])}>
			Страница списка объявлений

			<UserAdvertisements/>
		</div>
	);
});

export default UserAdvertisementsPage;
