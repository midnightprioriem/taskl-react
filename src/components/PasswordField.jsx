import React from 'react';
import { TextField, InputAdornment, IconButton } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import styles from '@pages/login.module.css'

const PasswordField = (props) => {
    const [values, setValues] = React.useState({
        showPassword: false,
    });
    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
    <TextField
        InputProps={{
            className: styles.textInput,
            endAdornment:
                < InputAdornment position="end" >
                    <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                    >
                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>

                </InputAdornment>
        }}
        variant="outlined"
        type={values.showPassword ? 'text' : 'password'}
        {...props}
    />
    );
}

export default PasswordField;