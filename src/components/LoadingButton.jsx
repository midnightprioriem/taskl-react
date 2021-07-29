import { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { CircularProgress, Button } from '@material-ui/core';

import styles from './loadingbutton.module.css';

const LoadingButton = (props) => {
    const { loading } = props;
    const [progress, setProgress] = useState(false);
    const timerRef = useRef();
    useEffect(() => {
        if (loading) {
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
        <div className={styles.root}>
            <Button
                {...props}
                disabled={progress}>
            </Button>
            {progress && <CircularProgress className={styles.progress} size={24} />}
        </div>

    );
}

LoadingButton.propTypes = {
    loading: PropTypes.bool.isRequired,
}

export default LoadingButton;
