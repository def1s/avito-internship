// TODO добавить тесты

export const formatNumber = (number: number) => {
	if (!number) {
		return number || 0;
	}

	return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};