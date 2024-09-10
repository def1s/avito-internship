// eslint-disable-next-line @conarti/feature-sliced/layers-slices
import { StateSchema } from 'app/providers/StoreProvider';

export const getNotificationsListIdCounter = (state: StateSchema) => state.notificationsList.idCounter;