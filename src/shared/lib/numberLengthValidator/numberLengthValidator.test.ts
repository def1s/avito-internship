import { formatNumber } from '../formatNumber/formatNumber';
import { numberLengthValidator } from './numberLengthValidator';

describe('numberLengthValidator', () => {
	test('formats number correctly when below maxValue', () => {
		expect(numberLengthValidator(12345, 100000)).toBe('12 345');
	});

	test('returns formatted maxValue when number exceeds maxValue', () => {
		expect(numberLengthValidator(150000, 100000)).toBe(`>${formatNumber(100000)}`);
	});

	test('handles string numbers correctly', () => {
		expect(numberLengthValidator('67890', 100000)).toBe('67 890');
	});

	test('returns formatted maxValue when string number exceeds maxValue', () => {
		expect(numberLengthValidator('150000', 100000)).toBe(`>${formatNumber(100000)}`);
	});

	test('returns formatted number when number is exactly equal to maxValue', () => {
		expect(numberLengthValidator(100000, 100000)).toBe('100 000');
	});

	test('handles edge cases like zero and negative numbers', () => {
		expect(numberLengthValidator(0, 1000)).toBe(0);
		expect(numberLengthValidator(-500, 1000)).toBe('-500');
	});
});
