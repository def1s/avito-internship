// eslint-disable-next-line @conarti/feature-sliced/layers-slices
import { StateSchema } from 'app/providers/StoreProvider';

export const getNotificationsListNotifications = (state: StateSchema) => state.notificationsList.notifications;