import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce';
import { Input } from 'shared/ui/Input/Input';
import {
	getAdvertisementsListSearchStr
} from '../../model/selectors/getAdvertisementsListSearchStr/getAdvertisementsListSearchStr';
import { paginateAdvertisements } from '../../model/services/paginateAdvertisements/paginateAdvertisements';
import { advertisementsListActions } from '../../model/slice/advertisementsListSlice';
import cls from './AdvertisementsSearch.module.scss';

interface AdvertisementsSearchProps {
    className?: string;
}

export const AdvertisementsSearch = memo((props: AdvertisementsSearchProps) => {
	const {
		className
	} = props;

	const dispatch = useAppDispatch();
	const searchStr = useSelector(getAdvertisementsListSearchStr);

	const searchAdvertisements = () => {
		dispatch(paginateAdvertisements());
	};

	const debouncedSearchAdvertisements = useDebounce(searchAdvertisements, 500);

	const onChangeSearchInput = useCallback((string: string) => {
		dispatch(advertisementsListActions.resetAdvertisements());
		dispatch(advertisementsListActions.setSearchStr(string));
		debouncedSearchAdvertisements();
	}, [debouncedSearchAdvertisements, dispatch]);

	return (
		<div className={classNames(cls.AdvertisementsSearch, {}, [className])}>
			<Input
				onChange={onChangeSearchInput}
				value={searchStr}
				label='Искать объявление'
				className={cls.searchInput}
			/>
		</div>
	);
});
