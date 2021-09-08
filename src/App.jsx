import '@/App.css';
import React from 'react';
import { StylesProvider, ThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router } from 'react-router-dom';

import { Header, Footer } from '@components';
import { MuiNordLight, MuiNordDark, NordLight } from "@/themes/norde";
import { AppContent } from '@pages';

function App() {

    return (
        <StyledThemeProvider theme={NordLight}>
            <ThemeProvider theme={MuiNordLight}>
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
        </StyledThemeProvider>
    );
}

export default App;