import type { Meta, StoryObj } from '@storybook/react';
import { Blur } from './Blur';

const meta: Meta<typeof Blur> = {
	title: 'shared/Blur',
	component: Blur,
};

export default meta;
type Story = StoryObj<typeof Blur>;

export const Default: Story = {
	args: {

	}
};
