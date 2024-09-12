import type { Meta, StoryObj } from '@storybook/react';
import { Text, TextAlign, TextTheme } from './Text';

const meta: Meta<typeof Text> = {
	title: 'shared/Text',
	component: Text,
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
	args: {
		title: 'Заголовок',
		text: 'Текст'
	}
};

export const Error: Story = {
	args: {
		title: 'Заголовок',
		text: 'Текст',
		theme: TextTheme.ERROR
	}
};

export const Center: Story = {
	args: {
		title: 'Заголовок',
		text: 'Текст',
		align: TextAlign.CENTER
	}
};

export const Right: Story = {
	args: {
		title: 'Заголовок',
		text: 'Текст',
		align: TextAlign.RIGHT
	}
};
