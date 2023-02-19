import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        main: {
            black: '#000000',
            dark: '#1C1C1C',
            superDarkGray: '#0A0A0A',
            darkGray: '#0E0E0E',
            gray: '#161616',
            mediumGray: '#2B2B2B',
            lightGray: '#5F5F5F',
            superLightGray: '#CDCDCD',
            white: '#ffffff',
            Success: '#6DB95A',
            Error: '#DD5E5E',
        },
        text: {
            black: '#000000',
            dark: '#1C1C1C',
            white: '#ffffff',
        },
    },
    typography: {
        fontFamily: ['Ubuntu', 'sans serif'].join(','),
    },
});

export default theme;
