import cls from './Advertisements.module.scss';
import { memo, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import {
	AdvertisementsList,
	advertisementsListReducer,
	fetchAdvertisements,
	getAdvertisementsListData,
	getAdvertisementsListError,
	getAdvertisementsListIsLoading
} from 'entities/AdvertisementsList';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

interface AdvertisementsProps {
    className?: string;
}

const initialReducers: ReducersList = {
	advertisementsList: advertisementsListReducer
};

export const Advertisements = memo((props: AdvertisementsProps) => {
	const {
		className
	} = props;

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchAdvertisements());
	}, [dispatch]);

	const data = useSelector(getAdvertisementsListData);
	const isLoading = useSelector(getAdvertisementsListIsLoading);
	const error = useSelector(getAdvertisementsListError);

	return (
		<DynamicModuleLoader
			reducers={initialReducers}
			removeAfterUnmount
		>

			<div className={classNames(cls.Advertisements, {}, [className])}>
				<AdvertisementsList data={data || []} isLoading={isLoading} error={error}/>
			</div>

		</DynamicModuleLoader>
	);
});
