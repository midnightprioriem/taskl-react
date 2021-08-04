import { Container, TextField, Typography } from '@material-ui/core';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import React, { useState, useEffect } from 'react';
import LoadingButton from './LoadingButton';
import PageTransition from './PageTransition';
import PasswordField from './PasswordField';
import styles from './signup.module.css';
import undrawSignUp from '../vector/undraw_Hello_re_3evm.svg';
import { useHistory } from 'react-router-dom';
import TasklApiKit from '../TasklApi/TasklApi';
import ErrorSnackbar from './ErrorSnackbar';

const SignUp = ({ userRegistered }) => {
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
    const [errorOpen, setErrorOpen] = useState(false);
    const [errorText, setErrorText] = useState("");
    const [usernameErrorText, setUsernameErrorText] = useState("");
    const [usernameError, setUsernameError] = useState(false);
    const [emailErrorText, setEmailErrorText] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [password1ErrorText, setPassword1ErrorText] = useState("");
    const [password1Error, setPassword1Error] = useState(false);
    const [password2ErrorText, setPassword2ErrorText] = useState("");
    const [password2Error, setPassword2Error] = useState(false);
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const handleCloseError = () => {
        setErrorOpen(false);
    }

    useEffect(() => {
        setUsernameError(false);
        setUsernameErrorText("");
    }, [username]);

    useEffect(() => {
        setEmailError(false);
        setEmailErrorText("");
    }, [email]);

    useEffect(() => {
        setPassword1Error(false);
        setPassword1ErrorText("");
    }, [password1]);

    useEffect(() => {
        setPassword2Error(false);
        setPassword2ErrorText("");
    }, [password2]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const result = await TasklApiKit.registerUser(username, email, password1, password2);
        setLoading(false);
        if (result?.success) {
            userRegistered(true);
            console.log("Registration success!");
            history.push("/registration-complete");
        }
        else {
            const { error, data } = result;
            setErrorText(error ? error : "Unable to connect to server.");
            if (data) {
                const { username, email, password1, password2 } = data;
                if (username) {
                    setUsernameError(true);
                    setUsernameErrorText(username);
                }
                if (email) {
                    setEmailError(true);
                    setEmailErrorText(email);
                }
                if (password1) {
                    setPassword1Error(true);
                    setPassword1ErrorText(password1);
                }
                if (password2) {
                    setPassword2Error(true);
                    setPassword2ErrorText(password2);
                }
            }
            setErrorOpen(true);
        }
    }

    return (
        <PageTransition>
            <Container className={styles.root}>
                <ErrorSnackbar open={errorOpen} onClose={handleCloseError} >
                        Unable to Sign Up. Error: {errorText}
                </ErrorSnackbar>
                <img className={styles.image} src={undrawSignUp} alt="" />
                <Typography className={styles.readOnlyText} variant="h3" align="center" gutterBottom style={{ fontWeight: 700 }}>
                    Sign Up.
                </Typography >
                <Typography className={styles.readOnlyText} variant="body1" color="textSecondary" align="center">
                    Create an account
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        InputProps={{
                            className: styles.textInput,
                        }}
                        error={usernameError}
                        helperText={usernameErrorText}
                        autoFocus={true}
                        margin="normal"
                        id="username"
                        label="Username"
                        autoComplete="username"
                        variant="outlined"
                        fullWidth={true}
                        onChange={e => setUserName(e.target.value)} />
                    <TextField
                        InputProps={{
                            className: styles.textInput,
                        }}
                        error={emailError}
                        helperText={emailErrorText}
                        margin="normal"
                        id="email"
                        label="Email"
                        autoComplete="email"
                        variant="outlined"
                        fullWidth={true}
                        onChange={e => setEmail(e.target.value)} />
                    <PasswordField
                        id="password"
                        error={password1Error}
                        helperText={password1ErrorText}
                        autoComplete="new-password"
                        label="Password"
                        fullWidth={true}
                        margin="normal"
                        onChange={e => setPassword1(e.target.value)}
                    />
                    <PasswordField
                        id="password-confirm"
                        error={password2Error}
                        helperText={password2ErrorText}
                        autoComplete="new-password"
                        label="Confirm Password"
                        fullWidth={true}
                        margin="normal"
                        onChange={e => setPassword2(e.target.value)}
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
                        label="Sign Up" />
                </form>
            </Container>
        </PageTransition >
    )
}

export default SignUp;