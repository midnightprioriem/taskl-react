import './App.css';
import Login from './components/Login'
import Copyright from './components/Copyright'
import { StylesProvider, ThemeProvider, createTheme } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

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
       type: "dark"
    }
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <StylesProvider injectFirst>
                <CssBaseline />
                <div className="App" >
                    <Login />
                    <Copyright />
                </div>
            </StylesProvider>
        </ThemeProvider>
    );
}

export default App;