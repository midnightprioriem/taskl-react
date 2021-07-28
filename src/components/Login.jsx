import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Grid, Checkbox, FormControlLabel, Link, Container, TextField, Typography, Button } from '@material-ui/core';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

import styles from './login.module.css';
import PasswordField from './PasswordField';
import TasklApi, {setClientToken} from '../TasklApi/TasklApi';

const Login = ({ setToken }) => {

    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const [loading, setLoading] = useState();

    return (
        <Container className={styles.root}>
            <Typography variant="h3" align="center" gutterBottom style={{ fontWeight: 700 }}>
                Sign In.
            </Typography>
            <Typography variant="body1" color="textSecondary" align="center">
                Welcome Back!
            </Typography>
            <form>
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
                <Button
                    type="submit"
                    className={styles.button}
                    variant="contained" color="primary"
                    fullWidth={true}
                    endIcon={<ArrowRightAltIcon/>}>
                    Login
                </Button>
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

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default Login;