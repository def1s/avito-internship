import { formatDate } from './formatDate';

describe('formatDate', () => {
	test('formats date correctly', () => {
		const date = new Date('2024-09-12T15:30:00');
		const formattedDate = formatDate(date);
		expect(formattedDate).toBe('09.12.2024, 15:30');
	});

	test('handles different months and days correctly', () => {
		const date = new Date('2023-03-05T08:15:00');
		const formattedDate = formatDate(date);
		expect(formattedDate).toBe('03.05.2023, 08:15');
	});

	test('formats a date with single-digit hours and minutes', () => {
		const date = new Date('2023-01-01T03:07:00');
		const formattedDate = formatDate(date);
		expect(formattedDate).toBe('01.01.2023, 03:07');
	});

	test('formats a date in different time zones correctly', () => {
		const date = new Date('2024-09-12T15:30:00Z'); // UTC date
		const formattedDate = formatDate(new Date(date.toLocaleString('en-US', { timeZone: 'America/New_York' })));
		expect(formattedDate).toBe('09.12.2024, 11:30'); // Adjusting to New York time
	});
});
