import './App.css';
import { useState } from 'react';
import { StylesProvider, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Landing from './components/Landing';
import Login from './components/Login';
import Header from './components/Header';
import Copyright from './components/Copyright';
import NordTheme from "./themes/norde";

function App() {
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <ThemeProvider theme={NordTheme}>
            <StylesProvider injectFirst>
                <CssBaseline />
                <div className="App" >
                    <Router>
                        <Header />
                        <Switch>
                            <Route exact path="/">
                                <Landing />
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
                        <Copyright />
                    </Router>
                </div>
            </StylesProvider>
        </ThemeProvider >
    );
}

export default App;