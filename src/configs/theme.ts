import {createTheme, ThemeOptions} from '@mui/material';

const themeOptions: ThemeOptions = {
    typography: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: 16,
        fontWeightLight: 300,
        fontWeightRegular: 500,
        fontWeightMedium: 700,
        fontWeightBold: 900,
        h1: {lineHeight: 1, letterSpacing: 0},
        h2: {lineHeight: 1, letterSpacing: 0},
        h3: {lineHeight: 1, letterSpacing: 0},
        h4: {lineHeight: 1, letterSpacing: 0},
        h5: {lineHeight: 1, letterSpacing: 0},
        h6: {lineHeight: 1, letterSpacing: 0},
        subtitle1: {lineHeight: 1, letterSpacing: 0},
        subtitle2: {lineHeight: 1, letterSpacing: 0},
        body1: {lineHeight: 1, letterSpacing: 0},
        body2: {lineHeight: 1, letterSpacing: 0},
        caption: {lineHeight: 1, letterSpacing: 0},
        overline: {lineHeight: 1, letterSpacing: 0},
        button: {letterSpacing: 0}
    }
};

export const lightTheme = createTheme({
    ...themeOptions,
    palette: {
        ...themeOptions.palette,
        mode: 'light'
    }
});

export const darkTheme = createTheme({
    ...themeOptions,
    palette: {
        ...themeOptions.palette,
        mode: 'dark'
    }
});
