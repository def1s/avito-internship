import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
	title: 'shared/Input',
	component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
	args: {
		value: 'Значение поля',
		label: 'Название поля',
		style: {
			width: '300px',
			height: '60px'
		}
	}
};

export const Empty: Story = {
	args: {
		label: 'Название поля',
		style: {
			width: '300px',
			height: '60px'
		}
	},
};
