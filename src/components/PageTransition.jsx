import React from 'react';
import { motion } from "framer-motion";
import styles from './pagetransition.module.css';

const pageTransitions = {
    initial: {
        opacity: 0,
    },
    in: {
        opacity: 1,
    },
    out: {
        opacity: 0,
    },
}


const PageTransition = (props) => {
    return (
        <motion.div className={styles.root}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageTransitions}
        >
            {props.children}
        </motion.div>
    );
}
export default PageTransition;