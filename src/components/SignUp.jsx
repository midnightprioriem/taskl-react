import { Container, Popover, TextField, Typography } from '@material-ui/core';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import React, { useState } from 'react';
import LoadingButton from './LoadingButton';
import PageTransition from './PageTransition';
import PasswordField from './PasswordField';
import styles from './signup.module.css';
import undrawSignUp from '../vector/undraw_Hello_re_3evm.svg';
import { useHistory } from 'react-router-dom';

const SignUp = ({ userRegistered }) => {
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();

        userRegistered(true);
        history.push("/registration-complete");
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
                        margin="normal"
                        id="username"
                        label="Username"
                        variant="outlined"
                        fullWidth={true}
                        onChange={e => setUserName(e.target.value)} />
                    <TextField
                        InputProps={{
                            className: styles.textInput,
                        }}
                        margin="normal"
                        id="email"
                        label="Email"
                        variant="outlined"
                        fullWidth={true}
                        onChange={e => setEmail(e.target.value)} />
                    <Popover
                        id="mouse-over-popover"
                        disableAutoFocus={true}
                        disableEnforceFocus={true}
                        open={open}
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        onClose={handlePasswordPopoverClose}
                        disableRestoreFocus>
                        <Typography>I use Popover.</Typography>
                    </Popover>
                    <PasswordField
                        id="password"
                        label="Password"
                        autoFocus={true}
                        onFocus={handlePasswordPopoverOpen}
                        onBlur={handlePasswordPopoverClose}
                        fullWidth={true}
                        margin="normal"
                        onChange={e => setPassword1(e.target.value)}
                    />
                    <PasswordField
                        id="password-confirm"
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