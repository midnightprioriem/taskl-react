import '@/App.css';
import React from 'react';
import { StylesProvider, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router } from 'react-router-dom';

import { Header, Footer } from '@components';
import { NordLight, NordDark } from "@/themes/norde";
import { AppContent } from '@pages';

function App() {

    return (
        <ThemeProvider theme={NordLight}>
            <StylesProvider injectFirst>
                <CssBaseline />
                <div className="App" >
                    <Router>
                        <Header />
                        <AppContent />
                        <Footer />
                    </Router>
                </div>
            </StylesProvider>
        </ThemeProvider >
    );
}

export default App;