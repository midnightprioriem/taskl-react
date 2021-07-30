import './App.css';
import { useState } from 'react';
import { StylesProvider, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Login from './components/Login'
import Copyright from './components/Copyright'
import NordTheme from "./themes/norde";

function App() {
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <ThemeProvider theme={NordTheme}>
            <StylesProvider injectFirst>
                <CssBaseline />
                <div className="App" >
                    <Router>
                        <Switch>
                            <Route exact path="/">
                                <Link to="/login">Login</Link>
                            </Route>
                            <Route path="/login">
                                <Login userLoggedIn={setLoggedIn} />
                            </Route>
                            <Route path="/tasks" >
                                {loggedIn ?
                                    <p>tasks</p>
                                    : <Login userLoggedIn={setLoggedIn} />
                                }
                            </Route>
                        </Switch>
                    </Router>
                    <Copyright />
                </div>
            </StylesProvider>
        </ThemeProvider >
    );
}

export default App;