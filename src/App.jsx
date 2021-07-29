import './App.css';
import Login from './components/Login'
import Copyright from './components/Copyright'
import { StylesProvider, ThemeProvider, createTheme } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { motion } from "framer-motion";

const theme = createTheme({
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
            icon: "#D8DEE9",
        }
    }
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <StylesProvider injectFirst>
                <CssBaseline />
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 300,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{ 
                        ease: "easeInOut",
                        duration: .3,
                    }}
                >
                    <div className="App" >
                        <Login />
                        <Copyright />
                    </div>
                </motion.div>
            </StylesProvider>
        </ThemeProvider>
    );
}

export default App;