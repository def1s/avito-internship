import { MouseEvent, ReactNode } from 'react';
import { classNames } from '../../lib/classNames/classNames';
import { Portal } from '../Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string;
	children: ReactNode;
	onClose: () => void;
	isOpen: boolean;
}

export const Modal = (props: ModalProps) => {
	const {
		className,
		children,
		onClose,
		isOpen
	} = props;

	const onClickContent = (e: MouseEvent) => {
		e.stopPropagation();
	};

	const mods: Record<string, boolean | undefined> = {
		[cls.isOpen]: isOpen
	};
    
	return (
		<Portal>
			<div className={classNames(cls.Modal, mods, [className])}>
				<div
					className={cls.overlay}
					onClick={onClose}
				>
					<div
						className={cls.content}
						onClick={(e) => onClickContent(e)}
					>
						{<div className={cls.cross} onClick={onClose}></div>}
						{children}
					</div>
				</div>
			</div>
		</Portal>
	);
};
