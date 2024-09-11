import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { IAdvertisement } from 'shared/types';
import { Blur } from 'shared/ui/Blur/Blur';
import { Button } from 'shared/ui/Button/Button';
import { Loader } from 'shared/ui/Loader/Loader';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { AdvertisementsItem } from '../AdvertisementsItem/AdvertisementsItem';
import { AdvertisementsSearch } from '../AdvertisementsSearch/AdvertisementsSearch';
import { LimitSelector } from '../LimitSelector/LimitSelector';
import cls from './AdvertisementsList.module.scss';

interface AdvertisementsListProps {
	className?: string;
	advertisements?: IAdvertisement[];
	isLoading?: boolean;
	error?: string;
	isEnd?: boolean;
	searchStr?: string;
	onPagination?: () => void;
}

export const AdvertisementsList = memo((props: AdvertisementsListProps) => {
	const {
		className,
		advertisements = [], // пустой по-умолчанию массив для безопасности
		isLoading,
		error,
		isEnd,
		searchStr = '',
		onPagination
	} = props;

	const renderAdvertisementsList = useCallback(() => {
		if (!advertisements.length && !isLoading && !error && searchStr.length === 0) {
			return (
				<Text
					title='У вас еще нет объявлений!'
					text='Вы можете добавить их с помощью специальной формы'
					align={TextAlign.CENTER}
					className={cls.message}
				/>
			);
		}

		if (!advertisements.length && !isLoading && searchStr.length > 0) {
			return (
				<Text
					title='Ничего не найдено'
					text='Попробуйте поискать другие объявления'
					align={TextAlign.CENTER}
					className={cls.message}
				/>
			);
		}

		return advertisements.map((adv) => (
			<AdvertisementsItem advertisement={adv} key={adv.id} />
		));
	}, [advertisements, isLoading, error, searchStr.length]);

	return (
		<div className={classNames(cls.AdvertisementsList, {}, [className])}>
			{isLoading && advertisements.length === 0 &&
				<>
					<Loader className={cls.loader} />
					<Blur/>
				</>
			}

			<div className={cls.additionalWrapper}>
				<AdvertisementsSearch className={cls.inputSearch}/>
				{advertisements.length > 0 && <LimitSelector />}
			</div>

			{error && (
				<Text
					title={error}
					text='Попробуйте перезагрузить страницу'
					theme={TextTheme.ERROR}
					align={TextAlign.CENTER}
					className={cls.message}
				/>
			)}

			<div className={cls.advertisementsWrapper}>
				{renderAdvertisementsList()}
			</div>

			{onPagination && advertisements.length > 0 && !isEnd && (
				<Button
					onClick={onPagination}
					disabled={isEnd || isLoading}
					className={cls.paginationBtn}
				>
					{isLoading ? 'Загрузка...' : 'Загрузить больше'}
				</Button>
			)}
		</div>
	);
});
