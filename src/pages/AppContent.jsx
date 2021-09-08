import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import {Landing, Login, SignUp, SignUpComplete} from '@pages';

const AppContent = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [registered, setRegistered] = useState(false);

    const location = useLocation();
    return (
        <AnimatePresence exitBeforeEnter initial={false}>
            <Switch location={location} key={location.pathname}>
                <Route exact path="/">
                    <Landing />
                </Route>
                <Route path="/login">
                    <Login userLoggedIn={setLoggedIn} />
                </Route>
                <Route path="/register">
                    {<SignUp userRegistered={setRegistered} />}
                </Route>
                <Route path="/registration-complete">
                    {registered ? <SignUpComplete /> : <Redirect to="/register"/>}
                </Route>
                <Route path="/tasks" >
                    {loggedIn ?
                        <p>tasks</p>
                        : <Login userLoggedIn={setLoggedIn} />
                    }
                </Route>
            </Switch>
        </AnimatePresence>
    );
}
export default AppContent;