import {useDispatch} from 'react-redux';

import {AppDispatch} from './use-app-dispatch.types';

const useAppDispatch = () => useDispatch<AppDispatch>();

export default useAppDispatch;
