import { memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { EditAdvertisementModal } from '../EditAdvertisementModal/EditAdvertisementModal';
import cls from './EditAdvertisement.module.scss';

interface EditAdvertisementProps {
    className?: string;
}

export const EditAdvertisement = memo((props: EditAdvertisementProps) => {
	const {
		className
	} = props;

	const [isEditAdvertisementModal, setIsEditAdvertisementModal] = useState(false);

	const onOpenEditAdvertisementModal = useCallback(() => {
		setIsEditAdvertisementModal(true);
	}, []);

	const onCloseEditAdvertisementModal = useCallback(() => {
		setIsEditAdvertisementModal(false);
	}, []);
    
	return (
		<div className={classNames(cls.EditAdvertisement, {}, [className])}>
			<Button onClick={onOpenEditAdvertisementModal}>Редактировать</Button>

			{
				isEditAdvertisementModal &&
					<EditAdvertisementModal
						isOpen={isEditAdvertisementModal}
						onClose={onCloseEditAdvertisementModal}
					/>
			}
		</div>
	);
});
