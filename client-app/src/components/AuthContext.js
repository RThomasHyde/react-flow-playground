import React, { useState, useEffect } from 'react';
import { useSetState } from 'react-use';
import useLocalStorage from 'react-use-localstorage';
import axios from 'axios';

export const AuthContext = React.createContext(null);

const initialState = {
    isLoggedIn: false,
    isLoginPending: false,
    loginError: null
}

export const ContextProvider = props => {
    const [user, setUser] = useLocalStorage('user', '');
    const [pass, setPass] = useLocalStorage('password', '');
    const [state, setState] = useSetState(initialState);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (loading) {
            login(user, pass);
            setLoading(false);
        }
    }, [loading, user, pass]); // eslint-disable-line react-hooks/exhaustive-deps

    const setLoginPending = (isLoginPending) => setState({ isLoginPending });
    const setLoginSuccess = (isLoggedIn) => setState({ isLoggedIn });
    const setLoginError = (loginError) => setState({ loginError });
    const getLoginError = () => state.loginError;

    const login = (email, password) => {
        setLoginPending(true);
        setLoginSuccess(false);
        setLoginError(null);

        fetchLogin(email, password, error => {
            setLoginPending(false);

            if (!error) {
                setLoginSuccess(true);
                setUser(email);
                setPass(password);
            } else {
                setLoginError(error);
                setUser('');
                setPass('');
            }
        })
    }

    const logout = () => {
        setUser('');
        setPass('');
        setLoginPending(false);
        setLoginSuccess(false);
        setLoginError(null);
    }

    return (
        <AuthContext.Provider
            value={{
                state,
                login,
                logout,
                getLoginError
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

const fetchLogin = (email, password, callback) =>
    axios.post("/auth", {
        username: email,
        password: password
    }, {
        timeout: 1000,
    }
    )
        .then(response => {
            console.log(response.data);
            if (response.data === 'Valid') {
                return callback(null);
            } else  {
                return callback(response.data);
            }
        });