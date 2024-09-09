import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { EditAdvertisementForm } from '../EditAdvertisementForm/EditAdvertisementForm';
import cls from './EditAdvertisementModal.module.scss';

interface EditAdvertisementModalProps {
    className?: string;
	isOpen: boolean;
	onClose: () => void;
}

export const EditAdvertisementModal = memo((props: EditAdvertisementModalProps) => {
	const {
		className,
		isOpen,
		onClose
	} = props;
    
	return (
		<Modal
			className={classNames(cls.EditAdvertisementModal, {}, [className])}
			isOpen={isOpen}
			onClose={onClose}
		>
			<EditAdvertisementForm/>
		</Modal>
	);
});
