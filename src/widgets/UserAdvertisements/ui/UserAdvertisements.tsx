import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
	AdvertisementsList,
	advertisementsListReducer,
	fetchAdvertisements,
	getAdvertisementsListAdvertisements,
	getAdvertisementsListError,
	getAdvertisementsListIsLoading
} from 'entities/AdvertisementsList';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import cls from './UserAdvertisements.module.scss';

interface UserAdvertisementsProps {
    className?: string;
}

const initialReducers: ReducersList = {
	advertisementsList: advertisementsListReducer
};

export const UserAdvertisements = memo((props: UserAdvertisementsProps) => {
	const {
		className
	} = props;

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchAdvertisements());
	}, [dispatch]);

	const advertisements = useSelector(getAdvertisementsListAdvertisements);
	const isLoading = useSelector(getAdvertisementsListIsLoading);
	const error = useSelector(getAdvertisementsListError);

	return (
		<DynamicModuleLoader
			reducers={initialReducers}
			removeAfterUnmount
		>

			<div className={classNames(cls.UserAdvertisements, {}, [className])}>
				<AdvertisementsList
					advertisements={advertisements || []}
					isLoading={isLoading}
					error={error}
				/>
			</div>

		</DynamicModuleLoader>
	);
});
