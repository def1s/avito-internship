import type { Meta, StoryObj } from '@storybook/react';
import { OrdersList } from './OrdersList';

const meta: Meta<typeof OrdersList> = {
	title: 'entities/OrdersList',
	component: OrdersList,
};

export default meta;
type Story = StoryObj<typeof OrdersList>;

const orders = [
	{
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
				description: 'Прочная.',
				price: 7000,
				createdAt: '2024-04-12T20:16:55.351Z',
				views: 1,
				likes: 0,
				imageUrl: '',
				count: 2
			}
		]
	},
	{
		id: '2',
		status: 1,
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
				description: 'Прочная.',
				price: 7000,
				createdAt: '2024-04-12T20:16:55.351Z',
				views: 1,
				likes: 0,
				imageUrl: '',
				count: 2
			}
		]
	}
];

export const Default: Story = {
	args: {
		orders: orders
	}
};

export const Loading: Story = {
	args: {
		isLoading: true,
		orders: orders
	}
};

export const Error: Story = {
	args: {
		error: 'Текст ошибки!',
		orders: []
	}
};

export const EmptyList: Story = {
	args: {
		orders: []
	}
};
