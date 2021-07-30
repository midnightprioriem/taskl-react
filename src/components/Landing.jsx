import { Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import undrawCheckBoxes from '../vector/undraw_Check_boxes_re_v40f.svg';
import styles from './landing.module.css';

const Landing = () => {
    return (
        <div className={styles.root}>
            <Typography variant="h2" className={styles.landingText}>
                Complete your tasks or give them to your friends.
            </Typography>
            <img className={styles.landingImage} src={undrawCheckBoxes} alt="" />
            <div className={styles.signUpLoginDiv}>
                <Button className={styles.signUpButton} component={Link} to="/register" size="large">Sign Up</Button>
                <Button className={styles.loginButton} component={Link} to="/login" size="large" variant="contained" color="primary">Login</Button>
            </div>
        </div>
    );
}
export default Landing;