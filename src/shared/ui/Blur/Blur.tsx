import { memo } from 'react';
import { classNames } from '../../lib/classNames/classNames';
import cls from './Blur.module.scss';

interface BlurProps {
    className?: string
}

export const Blur = memo(({ className }: BlurProps) => {

	return (
		<div className={classNames(cls.Blur, {}, [className])}></div>
	);
});
