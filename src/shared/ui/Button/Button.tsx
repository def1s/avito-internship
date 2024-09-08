import { ButtonHTMLAttributes, memo } from 'react';
import { classNames } from '../../lib/classNames/classNames';
import cls from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
}

export const Button = memo((props: ButtonProps) => {
	const {
		className,
		children,
		...otherProps
	} = props;
    
	return (
		<button
			className={classNames(cls.Button, {}, [className])}
			{...otherProps}
		>
			{children}
		</button>
	);
});
