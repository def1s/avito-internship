import { useDispatch } from 'react-redux';
// eslint-disable-next-line @conarti/feature-sliced/layers-slices
import { AppDispatch } from 'app/providers/StoreProvider';

// типизированный dispatch
export const useAppDispatch: () => AppDispatch = useDispatch;
