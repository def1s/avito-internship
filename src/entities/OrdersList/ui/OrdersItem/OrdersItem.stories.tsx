import type { Meta, StoryObj } from '@storybook/react';
import { OrdersItem } from './OrdersItem';

const meta: Meta<typeof OrdersItem> = {
	title: 'entities/OrdersItem',
	component: OrdersItem,
};

export default meta;
type Story = StoryObj<typeof OrdersItem>;

// TODO описать больше сторисов
const order = {
	id: '1',
	status: 0,
	createdAt: '2024-08-12T20:20:55.351Z',
	finishedAt: '',
	total: 314000,
	deliveryWay: 'mail',
	items: [
		{
			id: '8',
			name: 'Новый айфон',
			price: 100000,
			createdAt: '2024-08-12T12:16:55.351Z',
			views: 200000,
			likes: 302,
			imageUrl: '',
			count: 3
		},
		{
			id: '6',
			name: 'Картонная коробка',
			description: 'Почная.',
			price: 7000,
			createdAt: '2024-04-12T20:16:55.351Z',
			views: 1,
			likes: 0,
			imageUrl: '',
			count: 2
		}
	]
};

export const Default: Story = {
	args: {
		order: order
	}
};
