import store from 'redux/store';

export type AppSelector = ReturnType<typeof store.getState>
