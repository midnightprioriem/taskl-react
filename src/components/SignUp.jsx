import { Container, Popover, TextField, Typography, Snackbar } from '@material-ui/core';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import React, { useState, useEffect } from 'react';
import LoadingButton from './LoadingButton';
import PageTransition from './PageTransition';
import PasswordField from './PasswordField';
import styles from './signup.module.css';
import undrawSignUp from '../vector/undraw_Hello_re_3evm.svg';
import { useHistory } from 'react-router-dom';
import TasklApiKit from '../TasklApi/TasklApi';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

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
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
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
            setErrorText(result ? error : "Unable to connect to server.");
            const { username, email, password1, password2 } = data;
            if (username) {
                setUsernameError(true);
                setUsernameErrorText(username);
            }
            if (email) {
                setEmailError(true);
                setEmailErrorText(email);
            }
            if(password1) {
                setPassword1Error(true);
                setPassword1ErrorText(password1);
            }
            if(password2) {
                setPassword2Error(true);
                setPassword2ErrorText(password2);
            }
            setErrorOpen(true);
        }
    }

    const handlePasswordPopoverOpen = (event) => {
        console.log("Password popup open!");
        setAnchorEl(event.currentTarget);
        return false;
    }

    const handlePasswordPopoverClose = () => {
        console.log("Password popup closed!");
        setAnchorEl(null);
        return false;
    }

    return (
        <PageTransition>
            <Container className={styles.root}>
                <Snackbar open={errorOpen} onClose={handleCloseError} autoHideDuration={6000} >
                    <Alert severity="error">
                        Unable to Sign Up. Error: {errorText}
                    </Alert>
                </Snackbar>
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
                    <Popover
                        id="mouse-over-popover"
                        classes={{
                            paper: styles.passwordHintPopover,
                        }}
                        disableAutoFocus={true}
                        disableEnforceFocus={true}
                        open={open}
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                        onClose={handlePasswordPopoverClose}
                        disableRestoreFocus>
                        <Typography variant="subtitle1">
                            Password Requirements
                        </Typography>
                        <Typography variant="body2">
                            Password must contain at least 8 characters.
                        </Typography>
                        <Typography variant="body2">
                            Password must not contain only numbers.
                        </Typography>

                    </Popover>
                    <PasswordField
                        id="password"
                        error={password1Error}
                        helperText={password1ErrorText}
                        autoComplete="new-password"
                        label="Password"
                        onFocus={handlePasswordPopoverOpen}
                        onBlur={handlePasswordPopoverClose}
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