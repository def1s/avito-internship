import type { Meta, StoryObj } from '@storybook/react';
import { AdvertisementDetails } from './AdvertisementDetails';

const meta: Meta<typeof AdvertisementDetails> = {
	title: 'entities/AdvertisementDetails',
	component: AdvertisementDetails,
};

export default meta;
type Story = StoryObj<typeof AdvertisementDetails>;

// TODO описать больше сторисов
const adv = {
	'id': '1',
	'name': 'Стул старинный',
	'description': 'Очень красивый',
	'price': 2000,
	'createdAt': '2022-08-12T20:16:55.351Z',
	'views': 20,
	'likes': 2,
	'imageUrl': 'https://avatars.mds.yandex.net/i?id=c04ef7884f3726e405ad211b27969b54_l-5275813-images-thumbs&n=13'
};

export const Default: Story = {
	args: {
		advertisement: adv
	}
};

export const Loading: Story = {
	args: {
		isLoading: true
	}
};

export const Error: Story = {
	args: {
		error: 'Ошибка'
	}
};
