import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ReactFlowIcon from '../ReactFlowIcon';
import { AuthContext } from './AuthContext';

const useStyles = makeStyles((theme) => ({
    root: {
        //flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function Nav(props) {
    const { state, logout } = useContext(AuthContext);
    const classes = useStyles();
    const history = useHistory();

    const onLogout = (e) => {
        e.preventDefault();
        logout();
        history.push("/");
    }

    const onLogin = (e) => {
        e.preventDefault();
        history.push("/login");
    }

    const renderButton = (isLoggedIn) => {
        return (isLoggedIn) ?
            <Button color="inherit" onClick={onLogout}>
                Logout
            </Button>
            :
            <Button color="inherit" onClick={onLogin}>
                Login
            </Button>
            ;
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <ReactFlowIcon viewBox="0 0 40 40" />
                    </IconButton>
                    <Typography align="left" variant="h6" className={classes.title}>
                        React Flow Playground
                    </Typography>
                    {renderButton(state.isLoggedIn)}
                </Toolbar>
            </AppBar>
        </div>
    );
}