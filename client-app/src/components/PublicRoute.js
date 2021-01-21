import React, {useContext} from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const PublicRoute = ({component: Component, restricted, ...rest}) => {
    const { state } = useContext(AuthContext);

    return (
        <Route {...rest} render={props => (
            state.isLoggedIn && restricted ?
                <Redirect to="/flow" />
            : <Component {...props} />
        )} />
    );
};

export default PublicRoute;