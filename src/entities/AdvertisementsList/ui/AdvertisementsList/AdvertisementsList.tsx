import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { IAdvertisement } from 'shared/types';
import { Blur } from 'shared/ui/Blur/Blur';
import { Button } from 'shared/ui/Button/Button';
import { Loader } from 'shared/ui/Loader/Loader';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { getAdvertisementsListIsEnd } from '../../model/selectors/getAdvertisementsListIsEnd/getAdvertisementsListIsEnd';
import { paginateAdvertisements } from '../../model/services/paginateAdvertisements/paginateAdvertisements';
import { AdvertisementsItem } from '../AdvertisementsItem/AdvertisementsItem';
import { LimitSelector } from '../LimitSelector/LimitSelector';
import cls from './AdvertisementsList.module.scss';

interface AdvertisementsListProps {
	className?: string;
	advertisements?: IAdvertisement[];
	isLoading?: boolean;
	error?: string;
}

export const AdvertisementsList = memo((props: AdvertisementsListProps) => {
	const {
		className,
		advertisements = [], // пустой по-умолчанию массив для безопасности
		isLoading,
		error,
	} = props;

	// TODO если останется время, вынести логику пагинации в пропсы
	// вообще я всегда следую принципу, чтобы ui в entities - это переиспользуемый компонент, который помимо
	// данных из своего model может отрисовывать еще и какие-нибудь другие, поэтому этот лист принимает объявления в
	// качестве пропсов. но на данном этапе из-за сжатых сроков я решил не прокидывать никакую логику в виде
	// данных для пагинации, поэтому все связанное с этим я получаю прямо здесь, в ui, но если останется время, то
	// скорее всего это поправлю и сделаю так, как это для меня привычно, то есть прокину все через пропсы
	const dispatch = useAppDispatch();
	const isEnd = useSelector(getAdvertisementsListIsEnd);

	const onPagination = useCallback(() => {
		dispatch(paginateAdvertisements());
	}, [dispatch]);

	const renderAdvertisementsList = useCallback(() => {
		if (!advertisements.length && !isLoading && !error) {
			return (
				<Text
					title='У вас еще нет объявлений!'
					text='Вы можете добавить их с помощью специальной формы'
					align={TextAlign.CENTER}
					className={cls.error}
				/>
			);
		}

		return advertisements.map((adv) => (
			<AdvertisementsItem advertisement={adv} key={adv.id} />
		));
	}, [advertisements, isLoading, error]);

	return (
		<div className={classNames(cls.AdvertisementsList, {}, [className])}>
			{isLoading && (
				<>
					<Loader className={cls.loader} />
					<Blur className={cls.blur} />
				</>
			)}

			{error && (
				<Text
					title={error}
					text='Попробуйте перезагрузить страницу'
					theme={TextTheme.ERROR}
					align={TextAlign.CENTER}
					className={cls.error}
				/>
			)}

			{advertisements.length > 0 && <LimitSelector />}

			<div className={cls.advertisementsWrapper}>
				{renderAdvertisementsList()}
			</div>

			{advertisements.length > 0 && !isLoading && !isEnd && (
				<Button
					onClick={onPagination}
					disabled={isEnd}
					className={cls.paginationBtn}
				>
					Загрузить еще
				</Button>
			)}
		</div>
	);
});
