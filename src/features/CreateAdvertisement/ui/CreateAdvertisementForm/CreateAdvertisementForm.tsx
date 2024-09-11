import { FormEvent, memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { InputArea } from 'shared/ui/InputArea/InputArea';
import { Text } from 'shared/ui/Text/Text';
import {
	getCreateAdvertisementFormForm
} from '../../model/selectors/getCreateAdvertisementFormForm/getCreateAdvertisementFormForm';
import {
	getCreateAdvertisementFormIsLoading
} from '../../model/selectors/getCreateAdvertisementFormIsLoading/getCreateAdvertisementFormIsLoading';
import {
	createAdvertisementForUser
} from '../../model/services/createAdvertisementForUser/createAdvertisementForUser';
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

				<InputArea
					label='Описание'
					className={cls.inputArea}
					type='text'
					value={advertisementForm?.description}
					onChange={onChangeDescription}
				/>

				<Button className={cls.submitBtn}>Опубликовать объявление</Button>
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
				<Text
					title='Создание объявления'
					text='В этой форме вы можете создать свое объявление'
					className={cls.header}
				/>
				{/* TODO вставить Loader и Blur */}
				{isLoading ? 'Загрузка...' : renderAdvertisementForm()}

				{/*	TODO сделать вывод ошибки, сейчас ничего нет! */}
			</form>

		</DynamicModuleLoader>
	);
});
