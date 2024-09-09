import type { Meta, StoryObj } from '@storybook/react';
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
