import { ChangeEvent, InputHTMLAttributes, memo } from 'react';
import { classNames } from '../../lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps {
    className?: string;
	value?: string | number;
	onChange?: (value: string) => void;
	label?: string;
}

export const Input = memo((props: InputProps) => {
	const {
		className,
		value,
		onChange,
		label,
		...otherProps
	} = props;

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value);
	};

	// передаем className сразу в обертку и input, чтобы размеры менялись у обоих сразу
	return (
		<div className={classNames(cls.inputWrapper, {}, [className])}>
			<input
				value={value}
				onChange={handleChange}
				placeholder=''
				className={classNames(cls.Input, {}, [className])}
				{...otherProps}
			/>

			<label className={cls.floatingLabel}>{label}</label>
		</div>
	);
});
