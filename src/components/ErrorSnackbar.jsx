import React from 'react';
import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const ErrorSnackbar = (props) => {
    return (
        <Snackbar {...props} autoHideDuration={2000} >
                    <Alert severity="error">
                        {props.children}
                    </Alert>
        </Snackbar>
    );
}

export default ErrorSnackbar;