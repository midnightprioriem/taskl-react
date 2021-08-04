import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Grid, Checkbox, FormControlLabel, Link, Container, TextField, Typography } from '@material-ui/core';
import {Link as RouterLink} from 'react-router-dom';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

import TasklApiKit from '../TasklApi/TasklApi';
import styles from './login.module.css';
import PasswordField from './PasswordField';
import LoadingButton from './LoadingButton';
import PageTransition from './PageTransition';
import { useHistory } from 'react-router-dom';
import undrawLogin from '../vector/undraw_Login_re_4vu2.svg';
import ErrorSnackbar from './ErrorSnackbar';

const Login = ({ userLoggedIn }) => {

    const history = useHistory();
    const handleCloseError = () => {
        setErrorOpen(false);
    }

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [errorOpen, setErrorOpen] = useState(false);
    const [errorText, setErrorText] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (TasklApiKit.hasToken) {
            //already logged in
            return;
        }
        setLoading(true);
        const result = await TasklApiKit.loginRequest(username, password);
        setLoading(false);
        console.log(result);
        if (result?.success) {
            userLoggedIn(true);
            console.log("login success!");
            history.push("/app");
        }
        else {
            setErrorText(result ? result.data : "Unable to connect to server.");
            setErrorOpen(true);
        }
    }

    return (
        <PageTransition>
            <Container className={styles.container}>
                <ErrorSnackbar open={errorOpen} onClose={handleCloseError} >
                        Unable to login. Error: {errorText}
                </ErrorSnackbar>
                <img className={styles.image} src={undrawLogin} alt="" />
                <Typography className={styles.readOnlyText} variant="h3" align="center" gutterBottom style={{ fontWeight: 700 }}>
                    Sign In.
            </Typography >
                <Typography className={styles.readOnlyText} variant="body1" color="textSecondary" align="center">
                    Welcome Back!
            </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        InputProps={{
                            className: styles.textInput,
                        }}
                        autoFocus={true}
                        autoComplete="email"
                        margin="normal"
                        id="username"
                        label="Username"
                        variant="outlined"
                        fullWidth={true}
                        onChange={e => setUserName(e.target.value)} />
                    <PasswordField
                        id="password"
                        autoComplete="password"
                        label="Password"
                        fullWidth={true}
                        margin="normal"
                        onChange={e => setPassword(e.target.value)}
                    />
                    < FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Stay logged in"
                    />
                    <LoadingButton
                        // @ts-ignore
                        type="submit"
                        loading={loading}
                        buttonClassName={styles.button}
                        variant="contained"
                        color="primary"
                        fullWidth={true}
                        endIcon={<ArrowRightAltIcon />}
                        label="Login" />
                    <Grid container justifyContent="space-between">
                        <Grid item>
                            <Link href="#" variant="body2" >
                                Forgot password?
                        </Link>
                        </Grid>
                        <Grid item>
                            <Link component={RouterLink} to="/register" variant="body2" >
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </Container >
        </PageTransition>
    );
}

Login.propTypes = {
    userLoggedIn: PropTypes.func.isRequired,
};

export default Login;