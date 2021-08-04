import React from 'react';
import { Link, Typography } from '@material-ui/core';

const Footer = () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center" style={{margin:'.5vmin', userSelect: 'none'}}>
            👋 Built by <Link href='https://github.com/midnightprioriem' target="_blank">Zach</Link>
        </Typography>
    );
}
export default Footer;