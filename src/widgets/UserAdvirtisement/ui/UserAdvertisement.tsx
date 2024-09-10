import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { EditAdvertisement } from 'features/EditAdvertisement';
import {
	AdvertisementDetails,
	advertisementsDetailsReducer,
	fetchAdvertisementDetails,
	getAdvertisementDetailsAdvertisement,
	getAdvertisementDetailsError,
	getAdvertisementDetailsIsLoading
} from 'entities/AdvertisementDetails';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import cls from './UserAdvertisement.module.scss';

interface UserAdvertisementProps {
    className?: string;
}

const initialReducers: ReducersList = {
	advertisementDetails: advertisementsDetailsReducer
};

export const UserAdvertisement = memo((props: UserAdvertisementProps) => {
	const {
		className
	} = props;

	const { id } = useParams();
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (id) {
			dispatch(fetchAdvertisementDetails(id));
		}
	}, [id, dispatch]);

	const advertisement = useSelector(getAdvertisementDetailsAdvertisement);
	const isLoading = useSelector(getAdvertisementDetailsIsLoading);
	const error = useSelector(getAdvertisementDetailsError);

	return (
		<DynamicModuleLoader
			reducers={initialReducers}
			removeAfterUnmount
		>

			<div className={classNames(cls.UserAdvertisement, {}, [className])}>
				{advertisement && <AdvertisementDetails
					advertisement={advertisement}
					isLoading={isLoading}
					error={error}
					// можно передавать по условию, например, если есть поле editable в данных объявления
					// также можно передавать не компонент, а ссылку на него, если понадобиться прокидывать пропсы
					EditFeature={<EditAdvertisement/>}
				/>}
			</div>
			
		</DynamicModuleLoader>
	);
});
