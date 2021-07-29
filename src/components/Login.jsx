import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Grid, Checkbox, FormControlLabel, Link, Container, TextField, Typography } from '@material-ui/core';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

import TasklApiKit from '../TasklApi/TasklApi';
import styles from './login.module.css';
import PasswordField from './PasswordField';
import LoadingButton from './LoadingButton';

const Login = () => {

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const result = await TasklApiKit.loginRequest(username, password);
        console.log(result ? "login successful!" : "login failed.");
        setLoading(false);
    }

    return (
        <Container className={styles.root}>
            <Typography variant="h3" align="center" gutterBottom style={{ fontWeight: 700 }}>
                Sign In.
            </Typography>
            <Typography variant="body1" color="textSecondary" align="center">
                Welcome Back!
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    InputProps={{
                        className: styles.textInput,
                    }}
                    margin="normal"
                    id="username"
                    label="Username"
                    variant="outlined"
                    fullWidth={true}
                    onChange={e => setUserName(e.target.value)} />
                <PasswordField
                    id="password"
                    fullWidth={true}
                    margin="normal"
                    onChange={e => setPassword(e.target.value)}
                />
                < FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Stay logged in"
                />
                <LoadingButton
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
                        <Link href="#" variant="body2" >
                            {"Don't have an account? Sign Up"}
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </Container >
    );

}

export default Login;