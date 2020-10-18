import React, { useEffect, useContext } from "react";
import styled from "styled-components";

import Sidebar from "./Sidebar";

import AuthContext from "../context/auth/authContext";

const HomeContainer = styled.div`
    width: 100vw;
    display: grid;
    grid-template-columns: 30% 70%;
`;

const Home = (props) => {
    const authContext = useContext(AuthContext);
    const { usuario } = authContext;

    useEffect(() => {
        if (!usuario) {
            props.history.push("/");
        }
    }, []);

    return (
        <HomeContainer>
            <Sidebar />
            <h1>Home</h1>
        </HomeContainer>
    );
};

export default Home;
