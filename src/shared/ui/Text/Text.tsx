import { memo } from 'react';
import { classNames } from '../../lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
	PRIMARY = 'primary',
	ERROR = 'error'
}

export enum TextAlign {
	LEFT = 'left',
	RIGHT = 'right',
	CENTER = 'center'
}

interface TextProps {
    className?: string;
	title?: string;
	text?: string
	theme?: TextTheme;
	align?: TextAlign;
}

export const Text = memo((props: TextProps) => {
	const {
		className,
		title,
		text,
		theme = TextTheme.PRIMARY,
		align = TextAlign.LEFT
	} = props;

	const additional = [
		className,
		cls[theme],
		cls[align]
	];
    
	return (
		<div
			className={classNames(cls.Text, {}, additional)}
		>
			{title && <p className={cls.title}>{title}</p>}
			{text && <p className={cls.text}>{text}</p>}
		</div>
	);
});
