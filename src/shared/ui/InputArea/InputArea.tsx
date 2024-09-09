import { ChangeEvent, InputHTMLAttributes, memo } from 'react';
import { classNames } from '../../lib/classNames/classNames';
import cls from './InputArea.module.scss';

type HTMLInputAreaProps = Omit<InputHTMLAttributes<HTMLTextAreaElement>, 'value' | 'onChange'>;

interface InputAreaProps extends HTMLInputAreaProps {
	className?: string;
	value?: string | number;
	onChange?: (value: string) => void;
	label?: string;
}

export const InputArea = memo((props: InputAreaProps) => {
	const {
		className,
		value,
		onChange,
		label,
		...otherProps
	} = props;

	const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		onChange?.(e.target.value);
	};

	// передаем className сразу в обертку и input, чтобы размеры менялись у обоих сразу
	return (
		<div className={classNames(cls.inputAreaWrapper, {}, [className])}>
			<textarea
				value={value}
				onChange={handleChange}
				placeholder=''
				className={classNames(cls.InputArea, {}, [className])}
				{...otherProps}
			/>

			<label className={cls.floatingLabel}>{label}</label>
		</div>
	);
});
