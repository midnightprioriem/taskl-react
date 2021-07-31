import { createTheme } from '@material-ui/core/styles';

const NordDark = createTheme({
    typography: {
        fontFamily: [
            'Montserrat',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
    palette: {
        type: "dark",
        primary: {
            main: "#88C0D0",
        },
        secondary: {
            main: "#81A1C1",
        },
        error: {
            main: "#BF616A",
        },
        warning: {
            main: "#EBCB8B",
        },
        info: {
            main: "#B48EAD",
        },
        success: {
            main: "#A3BE8C",
        },
        background: {
            paper: "#3B4252",
            default: "#2E3440",
        },
        text: {
            primary: "#ECEFF4",
            secondary: "#E5E9F0",
            disabled: "#D8DEE9",
            hint: "#D8DEE9",
            // @ts-ignore
            icon: "#D8DEE9",
        }
    }
});

const NordLight = createTheme({
    typography: {
        fontFamily: [
            'Montserrat',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
    palette: {
        primary: {
            main: "#5E81AC",
        },
        secondary: {
            main: "#81A1C1",
        },
        error: {
            main: "#BF616A",
        },
        warning: {
            main: "#EBCB8B",
        },
        info: {
            main: "#B48EAD",
        },
        success: {
            main: "#A3BE8C",
        },
        background: {
            paper: "#E5E9F0",
            default: "#ECEFF4",
        },
        text: {
            primary: "#2E3440",
            secondary: "#3B4252",
            disabled: "#4C566A",
            hint: "#434C5E",
            // @ts-ignore
            icon: "#434C5E",
        }
    }
});

export {
    NordDark,
    NordLight,
}