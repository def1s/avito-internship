import { ChangeEvent, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { filters } from '../../lib/filters';
import { ordersListActions } from '../../model/slice/ordersListSlice';
import cls from './FilterSelector.module.scss';

interface FilterSelectorProps {
    className?: string;
}

export const FilterSelector = memo((props: FilterSelectorProps) => {
	const {
		className
	} = props;

	const dispatch = useAppDispatch();

	const onSelectFilter = (e: ChangeEvent<HTMLSelectElement>) => {
		if (e.target.value === '') {
			dispatch(ordersListActions.removeFilter());
		} else {
			const selectedValue = +e.target.value;
			dispatch(ordersListActions.updateFilter(selectedValue));
		}
	};

	const renderFilterSelector = () => {
		return Object.entries(filters).map(([key, value]) => {
			return (
				<option value={key} key={key}>{value}</option>
			);
		});
	};
    
	return (
		<div className={classNames(cls.FilterSelector, {}, [className])}>
			<select
				onChange={onSelectFilter}
			>
				<option value=''>Все</option>
				{renderFilterSelector()}
			</select>
		</div>
	);
});
