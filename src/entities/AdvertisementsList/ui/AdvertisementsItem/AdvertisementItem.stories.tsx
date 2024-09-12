import type { Meta, StoryObj } from '@storybook/react';
import { AdvertisementsItem } from './AdvertisementsItem';

const meta: Meta<typeof AdvertisementsItem> = {
	title: 'entities/AdvertisementsItem',
	component: AdvertisementsItem,
};

export default meta;
type Story = StoryObj<typeof AdvertisementsItem>;

export const Default: Story = {
	args: {
		advertisement: {
			'id': '6',
			'name': 'Картонная коробка',
			'description': 'Прочная.',
			'price': 7000,
			'createdAt': '2024-04-12T20:16:55.351Z',
			'views': 1,
			'likes': 0,
			'imageUrl': ''
		}
	}
};
