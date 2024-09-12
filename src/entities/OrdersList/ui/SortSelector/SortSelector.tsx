import { ChangeEvent, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text } from 'shared/ui/Text/Text';
import { sort } from '../../lib/sort';
import { ordersListActions } from '../../model/slice/ordersListSlice';
import cls from './SortSelector.module.scss';

interface SortSelectorProps {
    className?: string;
}

export const SortSelector = memo((props: SortSelectorProps) => {
	const {
		className
	} = props;

	const dispatch = useAppDispatch();

	const onSelectSort = (e: ChangeEvent<HTMLSelectElement>) => {
		if (e.target.value === '') {
			dispatch(ordersListActions.removeSort());
		} else {
			const selectedValue = e.target.value;
			dispatch(ordersListActions.setSort(selectedValue));
		}
	};

	const renderSortSelector = () => {
		return Object.entries(sort).map(([key, value]) => {
			return (
				<option value={key} key={key}>{value}</option>
			);
		});
	};
    
	return (
		<div className={classNames(cls.SortSelector, {}, [className])}>
			<Text text='Сортировка по сумме: '/>
			
			<select
				onChange={onSelectSort}
			>
				<option value=''>Нет</option>
				{renderSortSelector()}
			</select>
		</div>
	);
});
