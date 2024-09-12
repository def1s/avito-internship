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
import { Loader } from 'shared/ui/Loader/Loader';
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
		dispatch(editAdvertisementFormActions.updateAdvertisementForm({ price: price === '' ? null : Number(price) }));
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
				<Input
					label='Картинка'
					className={cls.input}
					type='url'
					value={advertisementForm?.imageUrl}
					onChange={onChangeImageUrl}
					disabled={isLoading}
				/>

				<Input
					label='Название'
					className={cls.input}
					type='text'
					value={advertisementForm?.name}
					onChange={onChangeName}
					disabled={isLoading}
					minLength={100}
				/>

				<Input
					label='Цена'
					className={cls.input}
					type='number'
					value={advertisementForm?.price !== null ? advertisementForm?.price : ''}
					onChange={onChangePrice}
					disabled={isLoading}
					min={0}
				/>

				<InputArea
					label='Описание'
					className={cls.inputArea}
					type='text'
					value={advertisementForm?.description}
					onChange={onChangeDescription}
					disabled={isLoading}
				/>

				<Button className={cls.submitBtn} disabled={isLoading}>Сохранить изменения</Button>
			</>
		);
	};
    
	return (
		<DynamicModuleLoader
			reducers={initialReducers}
			removeAfterUnmount
		>
			<form
				className={classNames(cls.EditAdvertisementForm, {}, [className])}
				onSubmit={onSubmit}
			>
				<Text
					title='Редактирование объявления'
					text='В этой форме вы можете отредактировать объявление'
					className={cls.header}
				/>

				{isLoading && <Loader className={cls.loader}/>}

				{renderAdvertisementForm()}
			</form>

		</DynamicModuleLoader>
	);
});
