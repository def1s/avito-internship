import { formatNumber } from '../formatNumber/formatNumber';

export const numberLengthValidator = (number: number | string, maxValue: number) => {
	number = Number(number);

	return number > maxValue ? `>${formatNumber(maxValue)}` : formatNumber(number);
};