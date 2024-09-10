import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { CreateAdvertisement } from 'features/CreateAdvertisement';
import {
	AdvertisementsList,
	advertisementsListReducer,
	paginateAdvertisements,
	getAdvertisementsListAdvertisements,
	getAdvertisementsListError,
	getAdvertisementsListIsLoading
} from 'entities/AdvertisementsList';
import {
	getAdvertisementsListOffset
} from 'entities/AdvertisementsList';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Text } from 'shared/ui/Text/Text';
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
	const offset = useSelector(getAdvertisementsListOffset);

	useEffect(() => {
		// первый запрос данных, если список пуст, в остальном список инициализировать не будем.
		if (offset === 0) {
			dispatch(paginateAdvertisements());
		}
	}, [offset, dispatch]);

	const advertisements = useSelector(getAdvertisementsListAdvertisements);
	const isLoading = useSelector(getAdvertisementsListIsLoading);
	const error = useSelector(getAdvertisementsListError);

	return (
		<DynamicModuleLoader
			reducers={initialReducers}
			// решил, что не буду сбрасывать состояние, однажды загрузив все объявления
		>
			<div className={classNames(cls.UserAdvertisements, {}, [className])}>
				<div className={cls.wrapper}>
					<Text
						title='Объявления'
						text='На этой странице отображаются все твои объявления'
					/>

					<CreateAdvertisement/>
				</div>

				<AdvertisementsList
					advertisements={advertisements}
					isLoading={isLoading}
					error={error}
				/>
			</div>

		</DynamicModuleLoader>
	);
});
