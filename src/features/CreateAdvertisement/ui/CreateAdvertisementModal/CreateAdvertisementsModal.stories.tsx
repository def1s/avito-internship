import type { Meta, StoryObj } from '@storybook/react';
import { CreateAdvertisementModal } from './CreateAdvertisementModal';

const meta: Meta<typeof CreateAdvertisementModal> = {
	title: 'features/CreateAdvertisementModal',
	component: CreateAdvertisementModal,
};

export default meta;
type Story = StoryObj<typeof CreateAdvertisementModal>;

// TODO сделать StoreDecorator для выставления значений store
export const Default: Story = {
	args: {
		isOpen: true
	}
};
