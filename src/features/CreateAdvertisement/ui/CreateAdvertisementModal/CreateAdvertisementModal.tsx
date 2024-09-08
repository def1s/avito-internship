import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { CreateAdvertisementForm } from '../CreateAdvertisementForm/CreateAdvertisementForm';
import cls from './CreateAdvertisementModal.module.scss';

interface CreateAdvertisementModalProps {
    className?: string;
	isOpen: boolean;
	onClose: () => void;
}

export const CreateAdvertisementModal = memo((props: CreateAdvertisementModalProps) => {
	const {
		className,
		isOpen,
		onClose
	} = props;
    
	return (
		<Modal
			className={classNames(cls.CreateAdvertisementModal, {}, [className])}
			isOpen={isOpen}
			onClose={onClose}
		>
			<CreateAdvertisementForm/>
		</Modal>
	);
});
