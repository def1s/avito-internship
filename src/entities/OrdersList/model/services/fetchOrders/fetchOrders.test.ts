import axios from 'axios';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { IOrder } from 'shared/types';
import { getOrdersListFilter } from '../../selectors/getOrdersListFilter/getOrdersListFilter';
import { getOrdersListSort } from '../../selectors/getOrdersListSort/getOrdersListSort';
import { fetchOrders } from './fetchOrders';

jest.mock('axios');
jest.mock('../../selectors/getOrdersListFilter/getOrdersListFilter');
jest.mock('../../selectors/getOrdersListSort/getOrdersListSort');

// Приведение axios.get к типу jest.Mock
const mockedAxiosGet = axios.get as jest.Mock;

describe('fetchOrders', () => {
	const orders: IOrder[] = [
		{
			id: '1',
			status: 0,
			createdAt: '2023-09-12T12:00:00Z',
			items: [
				{
					id: 'ad1',
					name: 'Ad 1',
					description: 'Description 1',
					price: 100,
					createdAt: '2023-09-12T12:00:00Z',
					views: 10,
					likes: 5,
					imageUrl: 'image1.jpg',
					count: 2
				}
			],
			deliveryWay: 'Mail',
			total: 200
		},
		{
			id: '2',
			status: 1,
			createdAt: '2023-09-13T12:00:00Z',
			items: [
				{
					id: 'ad2',
					name: 'Ad 2',
					description: 'Description 2',
					price: 200,
					createdAt: '2023-09-13T12:00:00Z',
					views: 15,
					likes: 10,
					imageUrl: 'image2.jpg',
					count: 1
				}
			],
			deliveryWay: 'Courier',
			total: 200
		}
	];

	beforeEach(() => {
		// Мокаем значения селекторов
		// @ts-expect-error типизация
		jest.mocked(getOrdersListFilter).mockReturnValue('0'); // Filter by status 0
		jest.mocked(getOrdersListSort).mockReturnValue('createdAt'); // Sort by createdAt
	});

	test('should return filtered and sorted orders when request is successful', async () => {
		mockedAxiosGet.mockResolvedValue({ data: orders });

		const testAsyncThunk = new TestAsyncThunk(fetchOrders);
		const result = await testAsyncThunk.callThunk();

		expect(mockedAxiosGet).toHaveBeenCalledWith(`${__API_URL__}/orders`, {
			params: {
				status: '0',
				_sort: 'createdAt'
			}
		});
		expect(result.meta.requestStatus).toBe('fulfilled');
		expect(result.payload).toEqual(orders);
	});

	test('should return reject with error message on failure', async () => {
		mockedAxiosGet.mockRejectedValue(new Error('Network Error'));

		const testAsyncThunk = new TestAsyncThunk(fetchOrders);
		const result = await testAsyncThunk.callThunk();

		expect(result.meta.requestStatus).toBe('rejected');
		expect(result.payload).toBe('Произошла ошибка');
	});
});
