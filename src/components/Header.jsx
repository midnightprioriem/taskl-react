import { Typography } from '@material-ui/core';
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
        </div>

    );
}
export default Header;