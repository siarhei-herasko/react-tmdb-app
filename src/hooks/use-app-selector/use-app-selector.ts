import {TypedUseSelectorHook, useSelector} from 'react-redux';

import {AppSelector} from './use-app-selector.types';

const useAppSelector: TypedUseSelectorHook<AppSelector> = useSelector;

export default useAppSelector;
