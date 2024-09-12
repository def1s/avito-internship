import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from 'shared/ui/Button/Button';
import { completeUserOrder } from '../model/services/completeUserOrder/completeUserOrder';
import cls from './CompleteOrder.module.scss';

interface CompleteOrderProps {
    className?: string;
	id?: number;
}

// в данной фиче нет смысла заводить отдельный slice, потому что мы не храним никаких данных для завершения заказа
// использую глобальный для заказов isLoading и error

export const CompleteOrder = memo((props: CompleteOrderProps) => {
	const {
		className,
		id
	} = props;

	const dispatch = useAppDispatch();

	const onCompleteOrder = useCallback(() => {
		if (id) {
			dispatch(completeUserOrder(id));
		}
	}, [dispatch, id]);
    
	return (
		<Button
			className={classNames(cls.CompleteOrder, {}, [className])}
			onClick={onCompleteOrder}
		>
			Завершить заказ
		</Button>
	);
});
