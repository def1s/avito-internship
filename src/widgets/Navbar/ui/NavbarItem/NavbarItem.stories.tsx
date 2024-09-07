import type { Meta, StoryObj } from '@storybook/react';
import { NavbarItem } from './NavbarItem';

const meta: Meta<typeof NavbarItem> = {
	title: 'widgets/NavbarItem',
	component: NavbarItem,
};

export default meta;
type Story = StoryObj<typeof NavbarItem>;

// TODO описать больше сторисов
export const Default: Story = {
	args: {
		item: {
			path: 'path',
			text: 'Объявления'
		}
	}
};
