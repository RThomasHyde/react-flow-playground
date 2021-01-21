import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Button,
    TextField,
    Grid,
    Paper,
    Typography,
} from "@material-ui/core";
import { useSetState } from 'react-use';
import { AuthContext } from '../components/AuthContext';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    loginform: {
        justifyContent: 'center',
        minHeight: '90vh',
    },
    buttonblock: {
        width: '100%',
    },
    loginbackground: {
        justifyContent: 'center',
        minHeight: '30vh',
        padding: '50px',
    },
}));

const initialState = {
    email: '',
    password: ''
}

const LoginForm = () => {
    const classes = useStyles();
    const { login, getLoginError } = useContext(AuthContext);
    const [state, setState] = useSetState(initialState);

    const onSubmit = (e) => {
        e.preventDefault();
        const { email, password } = state;
        login(email, password);
        // setState({
        //     email: '',
        //     password: ''
        // });
    }

    let loginError = getLoginError();

    return (
        <div>
            <Grid container spacing={0} justify="center" direction="row">
                <Grid item>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        spacing={2}
                        className={classes.loginform}>
                        <Paper
                            variant="elevation"
                            elevation={2}
                            className={classes.loginbackground}>
                            <Grid item>
                                <Typography component="h1" variant="h5">
                                    Sign in
                                </Typography>
                            </Grid>
                            <Grid item>
                                <form onSubmit={onSubmit}>
                                    <Grid container direction="column" spacing={2}>
                                        <Grid item>
                                            <TextField
                                                type="text"
                                                error={loginError}
                                                helperText={loginError ? "Invalid user name or password" : ""}
                                                placeholder="User name"
                                                fullWidth
                                                name="username"
                                                variant="outlined"
                                                value={state.email}
                                                onChange={e => setState({ email: e.target.value })}
                                                required
                                                autoFocus
                                            />
                                        </Grid>
                                        <Grid item>
                                            <TextField
                                                type="password"
                                                error={loginError}
                                                helperText={loginError ? "Invalid user name or password" : ""}
                                                placeholder="Password"
                                                fullWidth
                                                name="password"
                                                variant="outlined"
                                                value={state.password}
                                                onChange={e => setState({ password: e.target.value })}
                                                required
                                            />
                                        </Grid>
                                        <Grid item>
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                type="submit"
                                                className={classes.buttonblock}>
                                                Submit
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </form>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}


export default LoginForm;