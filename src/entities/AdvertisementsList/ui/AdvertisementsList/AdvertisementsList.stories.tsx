import type { Meta, StoryObj } from '@storybook/react';
import { AdvertisementsList } from './AdvertisementsList';

const meta: Meta<typeof AdvertisementsList> = {
	title: 'entities/AdvertisementsList',
	component: AdvertisementsList,
};

export default meta;
type Story = StoryObj<typeof AdvertisementsList>;

// TODO описать больше сторисов

const adv = [
	{
		'id': '1',
		'name': 'Стул старинный',
		'description': 'Очень красивый',
		'price': 2000,
		'createdAt': '2022-08-12T20:16:55.351Z',
		'views': 20,
		'likes': 2,
		'imageUrl': ''
	},
	{
		'id': '2',
		'name': 'Ведро снега',
		'description': 'Последняя возможность купить по выгодной цене!',
		'price': 3000,
		'createdAt': '2023-08-12T20:16:55.351Z',
		'views': 77832,
		'likes': 45666,
		'imageUrl': ''
	},
	{
		'id': '3',
		'name': 'Плащ невидимка',
		'price': 10000000,
		'createdAt': '2024-08-12T20:16:55.351Z',
		'views': 900,
		'likes': 19,
		'imageUrl': ''
	},
	{
		'id': '4',
		'name': 'Ковер',
		'description': 'Стильный модный, как у бабушки в деревне :)))',
		'price': 5000,
		'createdAt': '2024-07-12T20:16:55.351Z',
		'views': 2000000,
		'likes': 2,
		'imageUrl': ''
	},
	{
		'id': '5',
		'name': 'Носки',
		'price': 6000,
		'createdAt': '2024-06-12T20:16:55.351Z',
		'views': 0,
		'likes': 0,
		'imageUrl': ''
	},
	{
		'id': '6',
		'name': 'Картонная коробка',
		'description': 'Прочная.',
		'price': 7000,
		'createdAt': '2024-04-12T20:16:55.351Z',
		'views': 1,
		'likes': 0,
		'imageUrl': ''
	}];

export const Default: Story = {
	args: {
		advertisements: adv
	}
};

export const Loading: Story = {
	args: {
		isLoading: true,
		advertisements: adv
	}
};

export const Error: Story = {
	args: {
		error: 'Текст ошибки!',
		advertisements: []
	}
};

export const EmptyList: Story = {
	args: {
		advertisements: []
	}
};
