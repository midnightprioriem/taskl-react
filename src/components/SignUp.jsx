import { Container, Typography } from '@material-ui/core';
import React from 'react';
import PageTransition from './PageTransition';
import styles from './signup.module.css';

const SignUp = () => {

    return (
        <PageTransition>
            <Container className={styles.root}>
            <Typography className={styles.readOnlyText} variant="h3" align="center" gutterBottom style={{ fontWeight: 700 }}>
                    Sign Up.
            </Typography >
            </Container>
        </PageTransition>
    )
}

export default SignUp;