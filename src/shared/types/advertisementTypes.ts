export interface IAdvertisement {
	/* Уникальный идентификатор. */
	id: string;
	/* Название. */
	name: string;
	/* Описание. */
	description?: string;
	/* Цена. */
	price: number | null;
	/* Дата и время создания. */
	createdAt: string;
	/* Количество просмотров. */
	views: number;
	/* Количество лайков. */
	likes: number;
	/* Ссылка на изображение. */
	imageUrl?: string;
}

export type IAdvertisementForm = Omit<IAdvertisement, 'id' | 'views' | 'likes' | 'createdAt'>
