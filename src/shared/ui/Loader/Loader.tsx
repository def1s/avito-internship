import { memo } from 'react';
import { classNames } from '../../lib/classNames/classNames';
import cls from './Loader.module.scss';

interface LoaderProps {
	className?: string;
}

export const Loader = memo((props: LoaderProps) => {
	const {
		className,
	} = props;

	const additionalClasses = [
		className
	];

	return (
		<div className={classNames(cls.ldsSpinner, {}, additionalClasses)}>
			{Array.from({ length: 12 }).map((_, index) => (
				<div key={index}></div>
			))}
		</div>
	);
});
