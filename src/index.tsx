import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';

import store from 'redux/store';

import Application from 'application';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
        <Application/>
    </Provider>
);
