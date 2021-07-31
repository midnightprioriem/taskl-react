import React from 'react';
import { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { CircularProgress, Button } from '@material-ui/core';
import clsx from 'clsx';

import styles from './loadingbutton.module.css';

const LoadingButton = (props) => {
    const { loading, label, buttonClassName, ...childProps } = props;
    const [progress, setProgress] = useState(false);
    const timerRef = useRef();
    useEffect(() => {
        if (loading) {
            // @ts-ignore
            timerRef.current = window.setTimeout(() => {
                setProgress(true);
            }, 500);
        }
        else {
            clearTimeout(timerRef.current);
            setProgress(false);
        }
    }, [loading]);
    return (
        <div >
            <Button
                {...childProps}
                className={clsx(buttonClassName, styles.button)}
                disabled={progress}>
                {label}
                {progress && <CircularProgress className={styles.progress} size={24} />}
            </Button>
        </div>

    );
}

LoadingButton.propTypes = {
    loading: PropTypes.bool.isRequired,
}

export default LoadingButton;
