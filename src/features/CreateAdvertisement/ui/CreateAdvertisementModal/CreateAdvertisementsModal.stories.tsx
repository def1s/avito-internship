import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { createAdvertisementFormReducer } from '../../model/slice/createAdvertisementFormSlice';
import { CreateAdvertisementModal } from './CreateAdvertisementModal';

const meta: Meta<typeof CreateAdvertisementModal> = {
	title: 'features/CreateAdvertisementModal',
	component: CreateAdvertisementModal
};

export default meta;
type Story = StoryObj<typeof CreateAdvertisementModal>;

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
				createAdvertisementForm: {
					isLoading: true,
					advertisementForm: {
						name: '34343434'
					}
				},
			}
		)
	]
};
