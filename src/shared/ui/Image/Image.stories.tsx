import type { Meta, StoryObj } from '@storybook/react';
import { Image } from './Image';

const meta: Meta<typeof Image> = {
	title: 'shared/Image',
	component: Image,
};

export default meta;
type Story = StoryObj<typeof Image>;

export const Default: Story = {
	args: {
		url: 'https://avatars.mds.yandex.net/i?id=c04ef7884f3726e405ad211b27969b54_l-5275813-images-thumbs&n=13',
		style: {
			maxWidth: '400px',
			maxHeight: '400px'
		}
	},
};
