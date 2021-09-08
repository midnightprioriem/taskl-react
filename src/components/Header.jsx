import React from 'react';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { Button } from '@components';
import logo from '@/vector/taskl.svg';
import styles from '@components/header.module.css';
import { NordLight } from '@/themes/norde';

const Header = () => {
    return (
        <div className={styles.root}>
            <div className={styles.logoDiv}>
                <Link to="/">
                    <img className={styles.logo} src={logo} alt="taskl" />
                </Link>
                <Typography className={styles.text} variant="h6" color="textPrimary" align="center">
                    taskl
                </Typography>
            </div>
            <div className={styles.signUpLoginDiv}>
                <Button color={NordLight.color.accent4} to="/register" size="large" href="https://github.com/midnightprioriem">Sign Up</Button>
                <Button className={styles.loginButton} component={Link} to="/login" size="large" variant="contained" color="primary">Login</Button>
            </div>
        </div>

    );
}
export default Header;