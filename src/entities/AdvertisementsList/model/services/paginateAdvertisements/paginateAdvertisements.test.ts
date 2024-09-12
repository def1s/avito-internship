import axios from 'axios';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { IAdvertisement } from 'shared/types';
import { getAdvertisementsListLimit } from '../../selectors/getAdvertisementsListLimit/getAdvertisementsListLimit';
import { getAdvertisementsListOffset } from '../../selectors/getAdvertisementsListOffset/getAdvertisementsListOffset';
import { getAdvertisementsListSearchStr } from '../../selectors/getAdvertisementsListSearchStr/getAdvertisementsListSearchStr';
import { getAdvertisementsListStart } from '../../selectors/getAdvertisementsListStart/getAdvertisementsListStart';
import { paginateAdvertisements } from './paginateAdvertisements';

jest.mock('axios');
jest.mock('../../selectors/getAdvertisementsListLimit/getAdvertisementsListLimit');
jest.mock('../../selectors/getAdvertisementsListOffset/getAdvertisementsListOffset');
jest.mock('../../selectors/getAdvertisementsListSearchStr/getAdvertisementsListSearchStr');
jest.mock('../../selectors/getAdvertisementsListStart/getAdvertisementsListStart');

const mockedAxios = jest.mocked(axios, { shallow: true });
const mockedLimit = jest.mocked(getAdvertisementsListLimit, { shallow: true });
const mockedOffset = jest.mocked(getAdvertisementsListOffset, { shallow: true });
const mockedSearchStr = jest.mocked(getAdvertisementsListSearchStr, { shallow: true });
const mockedStart = jest.mocked(getAdvertisementsListStart, { shallow: true });

const mockedAxiosGet = axios.get as jest.Mock;

describe('paginateAdvertisements', () => {
	const advertisements: IAdvertisement[] = [
		{
			id: '1',
			name: 'Ad 1',
			description: 'Description 1',
			price: 100,
			createdAt: '2023-09-12T12:00:00Z',
			views: 10,
			likes: 5,
			imageUrl: 'image1.jpg'
		},
		{
			id: '2',
			name: 'Ad 2',
			description: 'Description 2',
			price: 200,
			createdAt: '2023-09-13T12:00:00Z',
			views: 15,
			likes: 10,
			imageUrl: 'image2.jpg'
		}
	];

	beforeEach(() => {
		// Мокаем значения селекторов
		mockedLimit.mockReturnValue(10);
		mockedOffset.mockReturnValue(0);
		mockedSearchStr.mockReturnValue('Ad');
		mockedStart.mockReturnValue(0);
	});

	test('should return paginated advertisements when request is successful', async () => {
		mockedAxiosGet.mockResolvedValue({ data: advertisements });

		const testAsyncThunk = new TestAsyncThunk(paginateAdvertisements);
		const result = await testAsyncThunk.callThunk();

		expect(mockedAxios.get).toHaveBeenCalledWith(`${__API_URL__}/advertisements`, {
			params: {
				_start: 0,
				_limit: 10,
				name: 'Ad'
			}
		});
		expect(result.meta.requestStatus).toBe('fulfilled');
		expect(result.payload).toEqual(advertisements);
	});

	test('should return reject with error message on failure', async () => {
		mockedAxiosGet.mockRejectedValue(new Error('Network Error'));

		const testAsyncThunk = new TestAsyncThunk(paginateAdvertisements);
		const result = await testAsyncThunk.callThunk();

		expect(result.meta.requestStatus).toBe('rejected');
		expect(result.payload).toBe('Произошла ошибка');
	});
});
