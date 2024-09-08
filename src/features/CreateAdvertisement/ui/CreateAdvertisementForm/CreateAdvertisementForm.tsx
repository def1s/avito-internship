import { FormEvent, memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import {
	getCreateAdvertisementFormError
} from 'features/CreateAdvertisement/model/selectors/getCreateAdvertisementFormError/getCreateAdvertisementFormError';
import {
	getCreateAdvertisementFormIsLoading
} from 'features/CreateAdvertisement/model/selectors/getCreateAdvertisementFormIsLoading/getCreateAdvertisementFormIsLoading';
import {
	createAdvertisementForUser
} from 'features/CreateAdvertisement/model/services/createAdvertisementForUser/createAdvertisementForUser';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import {
	getCreateAdvertisementFormForm
} from '../../model/selectors/getCreateAdvertisementFormForm/getCreateAdvertisementFormForm';
import {
	createAdvertisementFormActions,
	createAdvertisementFormReducer
} from '../../model/slice/createAdvertisementFormSlice';
import cls from './CreateAdvertisementForm.module.scss';

interface CreateAdvertisementFormProps {
    className?: string;
}

const initialReducers: ReducersList = {
	createAdvertisementForm: createAdvertisementFormReducer
};

export const CreateAdvertisementForm = memo((props: CreateAdvertisementFormProps) => {
	const {
		className
	} = props;

	const dispatch = useAppDispatch();
	const advertisementForm = useSelector(getCreateAdvertisementFormForm);
	const isLoading = useSelector(getCreateAdvertisementFormIsLoading);
	const error = useSelector(getCreateAdvertisementFormError);

	// обработчики полей
	const onChangeImageUrl = useCallback((imageUrl: string) => {
		dispatch(createAdvertisementFormActions.updateAdvertisementForm({ imageUrl }));
	}, [dispatch]);

	const onChangeName = useCallback((name: string) => {
		dispatch(createAdvertisementFormActions.updateAdvertisementForm({ name }));
	}, [dispatch]);

	const onChangePrice = useCallback((price: string) => {
		dispatch(createAdvertisementFormActions.updateAdvertisementForm({ price: Number(price) }));
	}, [dispatch]);

	const onChangeDescription = useCallback((description: string) => {
		dispatch(createAdvertisementFormActions.updateAdvertisementForm({ description }));
	}, [dispatch]);

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		dispatch(createAdvertisementForUser());
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

				{/* TODO написать InputArea */}
				<Input
					label='Описание'
					className={cls.input}
					type='text'
					value={advertisementForm?.description}
					onChange={onChangeDescription}
				/>

				<Button className={cls.submitBtn}>Создать объявление</Button>
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
				className={classNames(cls.CreateAdvertisementForm, {}, [className])}
				onSubmit={onSubmit}
			>
				{/* TODO вставить Loader и Blur */}
				{isLoading ? 'Загрузка...' : renderAdvertisementForm()}
			</form>

		</DynamicModuleLoader>
	);
});
