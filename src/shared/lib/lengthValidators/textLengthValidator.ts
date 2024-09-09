// TODO добавить тесты

export const textLengthValidator = (text: string | number, maxLength: number): string => {
	text = String(text);
	return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
};
