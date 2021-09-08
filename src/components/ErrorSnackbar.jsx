import React from 'react';
import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

import styles from './errorsnackbar.module.css';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const ErrorSnackbar = (props) => {
    return (
        <Snackbar {...props} autoHideDuration={2000} >
                    <Alert severity="error" className={styles.snackbar}>
                        {props.children}
                    </Alert>
        </Snackbar>
    );
}

export default ErrorSnackbar;