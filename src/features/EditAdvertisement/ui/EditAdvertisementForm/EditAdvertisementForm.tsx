import { FormEvent, memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAdvertisementDetailsAdvertisement } from 'entities/AdvertisementDetails';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { InputArea } from 'shared/ui/InputArea/InputArea';
import { Text } from 'shared/ui/Text/Text';
import {
	getEditAdvertisementFormForm
} from '../../model/selectors/getEditAdvertisementFormForm/getEditAdvertisementFormForm';
import {
	getEditAdvertisementFormIsLoading
} from '../../model/selectors/getEditAdvertisementFormIsLoading/getEditAdvertisementFormIsLoading';
import {
	editUserAdvertisement
} from '../../model/services/editUserAdvertisement/editUserAdvertisement';
import {
	editAdvertisementFormActions,
	editAdvertisementFormReducer
} from '../../model/slice/editAdvertisementFormSlice';
import cls from './EditAdvertisementForm.module.scss';

interface EditAdvertisementFormProps {
    className?: string;
}

const initialReducers: ReducersList = {
	editAdvertisementForm: editAdvertisementFormReducer
};

export const EditAdvertisementForm = memo((props: EditAdvertisementFormProps) => {
	const {
		className
	} = props;

	const { id } = useParams();
	const dispatch = useAppDispatch();

	const advertisement = useSelector(getAdvertisementDetailsAdvertisement);
	const advertisementForm = useSelector(getEditAdvertisementFormForm);

	const isLoading = useSelector(getEditAdvertisementFormIsLoading);

	useEffect(() => {
		if (advertisement) {
			dispatch(editAdvertisementFormActions.updateAdvertisementForm(advertisement));
		}
	}, [dispatch, advertisement]);

	// обработчики полей
	const onChangeImageUrl = useCallback((imageUrl: string) => {
		dispatch(editAdvertisementFormActions.updateAdvertisementForm({ imageUrl }));
	}, [dispatch]);

	const onChangeName = useCallback((name: string) => {
		dispatch(editAdvertisementFormActions.updateAdvertisementForm({ name }));
	}, [dispatch]);

	const onChangePrice = useCallback((price: string) => {
		dispatch(editAdvertisementFormActions.updateAdvertisementForm({ price: Number(price) }));
	}, [dispatch]);

	const onChangeDescription = useCallback((description: string) => {
		dispatch(editAdvertisementFormActions.updateAdvertisementForm({ description }));
	}, [dispatch]);

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// если id нет, то что-то здесь явно не так, можно выводить сообщение, но пока я не могу представить сценарий,
		// чтобы не было id вовсе
		if (id) {
			dispatch(editUserAdvertisement(id));
		}
	};

	const renderAdvertisementForm = () => {
		return (
			<>
				{/* TODO написать предпросмотр картинки */}
				<Input
					label='Картинка'
					className={cls.input}
					type='url'
					value={advertisementForm?.imageUrl}
					onChange={onChangeImageUrl}
				/>

				<Input
					label='Название'
					className={cls.input}
					type='text'
					value={advertisementForm?.name}
					onChange={onChangeName}
				/>

				<Input
					label='Цена'
					className={cls.input}
					type='number'
					value={advertisementForm?.price}
					onChange={onChangePrice}
				/>

				<InputArea
					label='Описание'
					className={cls.inputArea}
					type='text'
					value={advertisementForm?.description}
					onChange={onChangeDescription}
				/>

				<Button className={cls.submitBtn}>Сохранить изменения</Button>
			</>
		);
	};
    
	return (
		<DynamicModuleLoader
			reducers={initialReducers}
			removeAfterUnmount
		>

			{/* TODO написать валидацию для всех полей */}
			<form
				className={classNames(cls.EditAdvertisementForm, {}, [className])}
				onSubmit={onSubmit}
			>
				<Text
					title='Редактирование объявления'
					text='В этой форме вы можете отредактировать объявление'
					className={cls.header}
				/>

				{/* TODO вставить Loader и Blur */}
				{isLoading ? 'Загрузка...' : renderAdvertisementForm()}

				{/*	TODO сделать вывод ошибки, сейчас ничего нет! */}
			</form>

		</DynamicModuleLoader>
	);
});
