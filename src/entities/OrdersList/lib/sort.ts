export const sort: Record<string, string> = {
	'total': 'По возрастанию',
	'-total': 'По убыванию'
};

export type SortKeys = keyof typeof sort;
