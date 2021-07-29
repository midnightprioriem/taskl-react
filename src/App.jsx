import './App.css';
import Login from './components/Login'
import Copyright from './components/Copyright'
import { StylesProvider, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import TasklApi from "./TasklApi/TasklApi";
import NordTheme from "./themes/norde";

function App() {
    return (
        <ThemeProvider theme={NordTheme}>
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