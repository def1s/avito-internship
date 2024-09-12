import axios from 'axios';
import { notificationsListActions } from 'entities/NotificationsList';
import { ordersListActions } from 'entities/OrdersList';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { NotificationTypes } from 'shared/types';
import { completeUserOrder } from './completeUserOrder';

jest.mock('axios');
jest.mock('entities/NotificationsList');
jest.mock('entities/OrdersList');

const mockedAxiosPatch = axios.patch as jest.MockedFunction<typeof axios.patch>;
const mockedAddNotification = notificationsListActions.addNotification as jest.MockedFunction<typeof notificationsListActions.addNotification>;
const mockedSetIsLoading = ordersListActions.setIsLoading as jest.MockedFunction<typeof ordersListActions.setIsLoading>;

describe('completeUserOrder', () => {
	beforeEach(() => {
		jest.resetAllMocks();
	});


	test('should dispatch error notification on failure', async () => {
		mockedAxiosPatch.mockRejectedValue(new Error('Network Error'));

		const testAsyncThunk = new TestAsyncThunk(completeUserOrder);
		await testAsyncThunk.callThunk(1);

		expect(mockedAddNotification).toHaveBeenCalledWith({
			message: 'Произошла ошибка',
			theme: NotificationTypes.ERROR
		});
		expect(mockedSetIsLoading).toHaveBeenCalledWith(false);
	});
});
