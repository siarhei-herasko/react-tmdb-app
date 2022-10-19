import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {CssBaseline, ThemeProvider} from '@mui/material';

import store from 'redux/store';
import {darkTheme} from 'configs/theme';

import Application from 'application';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
        <BrowserRouter>
            <ThemeProvider theme={darkTheme}>
                <Application/>
                <CssBaseline/>
            </ThemeProvider>
        </BrowserRouter>
    </Provider>
);
