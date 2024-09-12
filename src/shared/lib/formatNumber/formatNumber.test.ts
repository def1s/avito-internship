import { formatNumber } from './formatNumber';

describe('formatNumber', () => {
	test('formats number with spaces as thousands separators', () => {
		expect(formatNumber(1234567)).toBe('1 234 567');
		expect(formatNumber(1000)).toBe('1 000');
		expect(formatNumber(9876543210)).toBe('9 876 543 210');
	});

	test('returns 0 for input of 0', () => {
		expect(formatNumber(0)).toBe(0);
	});

	test('handles small numbers correctly', () => {
		expect(formatNumber(123)).toBe('123');
		expect(formatNumber(12)).toBe('12');
		expect(formatNumber(1)).toBe('1');
	});

	test('handles negative numbers correctly', () => {
		expect(formatNumber(-1234567)).toBe('-1 234 567');
		expect(formatNumber(-1000)).toBe('-1 000');
	});

	test('handles decimal numbers correctly', () => {
		expect(formatNumber(1234.56)).toBe('1 234.56');
		expect(formatNumber(987654.3210)).toBe('987 654.321');
	});
});
