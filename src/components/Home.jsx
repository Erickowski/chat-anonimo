import React, { useEffect, useContext } from "react";

import AuthContext from "../context/auth/authContext";

const Home = (props) => {
    const authContext = useContext(AuthContext);
    const { usuario } = authContext;

    useEffect(() => {
        if (!usuario) {
            props.history.push("/");
        }
    }, []);

    return <h1>Home</h1>;
};

export default Home;
