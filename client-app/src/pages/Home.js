import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from '../components/AuthContext';
import Nav from '../components/Nav'

const Home = () => {
    const { state } = useContext(AuthContext);

    if (state.isLoggedIn) {
        return (
            <Redirect to="/flow" />
        )
    }
    else { 
        return (
            <>
                <Nav />
                <div>Landing page</div>
            </>
        )
    }
}

export default Home;