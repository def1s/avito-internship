import { ImgHTMLAttributes, memo } from 'react';
import NotFoundIcon from '../../assets/icons/not_found.svg';
import { classNames } from '../../lib/classNames/classNames';
import cls from './Image.module.scss';

export enum ImageObjectFit {
	DEFAULT = '',
	COVER = 'coverObjectFit',
}

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement>{
	className?: string;
	url?: string;
	objectFit?: ImageObjectFit;
}

export const Image = memo((props: ImageProps) => {
	const {
		className,
		url,
		objectFit = ImageObjectFit.DEFAULT,
		...otherProps
	} = props;

	return (
		<div className={classNames(cls.imageWrapper, {}, [className, cls[objectFit]])}>
			{
				url ? (
					<img
						className={cls.image}
						src={url}
						{...otherProps}
					/>
				) : (
					<NotFoundIcon className={cls.notFoundIcon}/>
				)
			}
		</div>
	);
});
