import type { Meta, StoryObj } from '@storybook/react';
import { InputArea } from './InputArea';

const meta: Meta<typeof InputArea> = {
	title: 'shared/InputArea',
	component: InputArea,
};

export default meta;
type Story = StoryObj<typeof InputArea>;

export const Default: Story = {
	args: {
		value: 'Значение поля',
		label: 'Название поля',
		style: {
			width: '500px',
			height: '300px'
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
