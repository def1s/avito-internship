import { ChangeEvent, memo } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Text } from 'shared/ui/Text/Text';
import {
	getAdvertisementsListLimit
} from '../../model/selectors/getAdvertisementsListLimit/getAdvertisementsListLimit';
import { advertisementsListActions } from '../../model/slice/advertisementsListSlice';
import cls from './LimitSelector.module.scss';

interface LimitSelectorProps {
    className?: string;
}

export const LimitSelector = memo((props: LimitSelectorProps) => {
	const {
		className
	} = props;

	const dispatch = useAppDispatch();
	const limit = useSelector(getAdvertisementsListLimit);

	const onSelectLimit = (e: ChangeEvent<HTMLSelectElement>) => {
		dispatch(advertisementsListActions.setLimit(Number(e.target.value)));
	};

	// список всех лимитов, можно хранить в отдельном файле или получать с бекенда
	const limits: number[] = [10, 15, 20, 25, 30];

	return (
		<div
			className={classNames(cls.LimitSelector, {}, [className])}
		>
			<Text text='Количество элементов: '/>
			<select
				onChange={onSelectLimit}
				value={limit}
			>
				{limits.map(limit => (
					<option key={limit} value={limit}>{limit}</option>
				))}
			</select>
		</div>
	);
});
