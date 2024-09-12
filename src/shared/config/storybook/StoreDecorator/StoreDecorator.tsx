import { StoryFn } from '@storybook/react';
// eslint-disable-next-line @conarti/feature-sliced/layers-slices
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
// eslint-disable-next-line @conarti/feature-sliced/layers-slices
import { notificationsListReducer } from 'entities/NotificationsList';
import { ReducersList } from '../../../lib/components/DynamicModuleLoader/DynamicModuleLoader';
// eslint-disable-next-line @conarti/feature-sliced/layers-slices

const defaultAsyncReducers: ReducersList = {
	notificationsList: notificationsListReducer
};

// декоратор для установки произвольного значения стейтов и тестирования компонентов в сторибуке
// работает, если указывать редьюсер вручную
export const StoreDecorator = (
	state: DeepPartial<StateSchema>,
	asyncReducers?: ReducersList,
) => (StoryComponent: StoryFn) => (
	<StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
		<StoryComponent />
	</StoreProvider>
);
