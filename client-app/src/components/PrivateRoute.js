import React, {useContext} from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const PrivateRoute = ({component: Component, ...rest}) => {
    const { state } = useContext(AuthContext);

    return (
        // Show the component only when the user is logged in
        // Otherwise, redirect the user to the login page
        <Route {...rest} render={props => (
            state.isLoggedIn ?
                <Component {...props} />
            : <Redirect to="/login" />
        )} />
    );
};

export default PrivateRoute;