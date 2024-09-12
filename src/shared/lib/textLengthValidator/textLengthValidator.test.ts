import { textLengthValidator } from './textLengthValidator';

describe('textLengthValidator', () => {
	test('returns truncated text with ellipsis when length exceeds maxLength', () => {
		expect(textLengthValidator('Hello, world!', 5)).toBe('Hello...');
		expect(textLengthValidator('This is a long text.', 10)).toBe('This is a...');
	});

	test('returns original text when length does not exceed maxLength', () => {
		expect(textLengthValidator('Short', 10)).toBe('Short');
		expect(textLengthValidator('ExactLength', 11)).toBe('ExactLength');
	});

	test('handles empty string input correctly', () => {
		expect(textLengthValidator('', 5)).toBe('');
		expect(textLengthValidator('', 0)).toBe('');
	});

	test('handles number input correctly', () => {
		expect(textLengthValidator(1234567890, 5)).toBe('12345...');
		expect(textLengthValidator(987, 10)).toBe('987');
	});

	test('handles maxLength of 0 correctly', () => {
		expect(textLengthValidator('Some text', 0)).toBe('...');
		expect(textLengthValidator(123456, 0)).toBe('...');
	});

	test('handles edge cases with very large text and small maxLength', () => {
		const largeText = 'A'.repeat(1000); // very large text
		expect(textLengthValidator(largeText, 10)).toBe('AAAAAAAAAA...');
	});
});
