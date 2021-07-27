import styles from './login.module.css'
import { Grid, TextField, Typography, Button } from '@material-ui/core';

const Login = () => {
    return (
        <Grid container
            justifyContent="center"
            alignItems="center"
            display="flex"
            direction="column"
            spacing={3}
            className={styles.root}
        >
            <Grid item>
                <Typography variant="h3" gutterBottom>
                    Login
            </Typography>
            </Grid>
            <Grid item className={styles.gridItem}>
                <TextField
                    InputProps={{
                        className: styles.textInput,
                    }}
                    id="username"
                    label="Username"
                    variant="outlined"
                    fullWidth={true} />
            </Grid>
            <Grid item className={styles.gridItem}>
                <TextField
                    InputProps={{
                        className: styles.textInput,
                    }}
                    id="password"
                    label="Password"
                    variant="outlined"
                    type="password"
                    fullWidth={true} />
            </Grid>
            <Grid item className={styles.gridItem}>
                <Button className={styles.button} variant="contained" color="primary" fullWidth={true}>Login</Button>
            </Grid>
        </Grid>
    );

}

export default Login;