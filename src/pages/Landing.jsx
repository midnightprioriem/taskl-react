import React from 'react';
import { Typography } from '@material-ui/core';

import undrawCheckBoxes from '../vector/undraw_Add_tasks_re_s5yj.svg';
import styles from './landing.module.css';
import PageTransition from '../components/PageTransition';

const Landing = () => {
    return (
        <PageTransition>
            <div className={styles.root}>
                <Typography variant="h2" className={styles.landingText}>
                    Complete your tasks or give them to your friends.
            </Typography>
                <img className={styles.landingImage} src={undrawCheckBoxes} alt="" />
            </div>
        </PageTransition>
    );
}
export default Landing;