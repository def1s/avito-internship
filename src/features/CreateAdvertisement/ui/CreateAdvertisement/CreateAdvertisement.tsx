import { memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { CreateAdvertisementModal } from '../CreateAdvertisementModal/CreateAdvertisementModal';
import cls from './CreateAdvertisement.module.scss';

interface CreateAdvertisementProps {
    className?: string;
}

export const CreateAdvertisement = memo((props: CreateAdvertisementProps) => {
	const {
		className
	} = props;

	const [isCreateAdvertisementModal, setIsCreateAdvertisementModal] = useState(false);

	const onOpenCreateAdvertisementModal = useCallback(() => {
		setIsCreateAdvertisementModal(true);
	}, []);

	const onCloseCreateAdvertisementModal = useCallback(() => {
		setIsCreateAdvertisementModal(false);
	}, []);
    
	return (
		<div className={classNames(cls.CreateAdvertisement, {}, [className])}>
			<Button onClick={onOpenCreateAdvertisementModal}>Создать объявление</Button>

			{
				isCreateAdvertisementModal &&
					<CreateAdvertisementModal
						isOpen={isCreateAdvertisementModal}
						onClose={onCloseCreateAdvertisementModal}
					/>
			}
		</div>
	);
});
