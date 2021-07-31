import React from 'react';
import { Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import logo from '../vector/taskl.svg';
import styles from './header.module.css';

const Header = () => {
    return (
        <div className={styles.root}>
            <Link to="/">
                <img className={styles.logo} src={logo} alt="taskl" />
            </Link>
            <Typography className={styles.text} variant="h6" color="textPrimary" align="center">
                taskl
            </Typography>
            <div className={styles.signUpLoginDiv}>
                <Button className={styles.signUpButton} component={Link} to="/register" size="large">Sign Up</Button>
                <Button className={styles.loginButton} component={Link} to="/login" size="large" variant="contained" color="primary">Login</Button>
            </div>
        </div>

    );
}
export default Header;