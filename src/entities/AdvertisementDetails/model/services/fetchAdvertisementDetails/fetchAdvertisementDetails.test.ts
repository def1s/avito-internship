import axios from 'axios';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { IAdvertisement } from 'shared/types';
import { fetchAdvertisementDetails } from './fetchAdvertisementDetails';

jest.mock('axios');
const mockedAxios = jest.mocked(axios, { shallow: true });

const mockedAxiosGet = axios.get as jest.Mock;

describe('fetchAdvertisementDetails', () => {
	const advertisement: IAdvertisement = {
		id: '1',
		name: 'Test Advertisement',
		description: 'This is a test advertisement',
		price: 100,
		createdAt: '2023-09-12T12:00:00Z',
		views: 10,
		likes: 5,
		imageUrl: 'test-image-url'
	};

	test('should return advertisement details when request is successful', async () => {
		mockedAxiosGet.mockResolvedValue({ data: advertisement });

		const testAsyncThunk = new TestAsyncThunk(fetchAdvertisementDetails);
		const result = await testAsyncThunk.callThunk('1');

		expect(mockedAxios.get).toHaveBeenCalledWith(`${__API_URL__}/advertisements/1`);
		expect(result.meta.requestStatus).toBe('fulfilled');
		expect(result.payload).toEqual(advertisement);
	});

	test('should return reject with error message on failure', async () => {
		mockedAxiosGet.mockRejectedValue(new Error('Network Error'));

		const testAsyncThunk = new TestAsyncThunk(fetchAdvertisementDetails);
		const result = await testAsyncThunk.callThunk('1');

		expect(result.meta.requestStatus).toBe('rejected');
		expect(result.payload).toBe('Произошла ошибка');
	});
});
