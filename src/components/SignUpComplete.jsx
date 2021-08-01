import { Typography } from '@material-ui/core';
import React from 'react';
import PageTransition from './PageTransition';
import styles from './signupcomplete.module.css';
import emailSent from '../vector/undraw_Mail_sent_re_0ofv.svg';

const SignUpComplete = () => {

    return(
        <PageTransition>
            <div className={styles.root}>
            <img className={styles.image} src={emailSent} alt="" />
            <Typography variant="h3" align="center" gutterBottom style={{ fontWeight: 700 }}>
                    Sign Up Complete!
            </Typography >
            <Typography className={styles.readOnlyText} variant="body1" color="textSecondary" align="center">
                    A verification link has been sent to your email account. Please click the link to verify
                    your new account and log in.
            </Typography>
            </div>
        </PageTransition>
    );
}

export default SignUpComplete