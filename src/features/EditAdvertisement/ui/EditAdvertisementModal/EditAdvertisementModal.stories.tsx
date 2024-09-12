import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { editAdvertisementFormReducer } from '../../model/slice/editAdvertisementFormSlice';
import { EditAdvertisementModal } from './EditAdvertisementModal';

const meta: Meta<typeof EditAdvertisementModal> = {
	title: 'features/EditAdvertisementModal',
	component: EditAdvertisementModal,
};

export default meta;
type Story = StoryObj<typeof EditAdvertisementModal>;

// TODO сделать StoreDecorator для выставления значений store
export const Default: Story = {
	args: {
		isOpen: true
	}
};

export const Loading: Story = {
	args: {
		isOpen: true
	},
	decorators: [
		StoreDecorator(
			{
				editAdvertisementForm: {
					isLoading: true
				}
			},
			{
				editAdvertisementForm: editAdvertisementFormReducer
			}
		)
	]
};
