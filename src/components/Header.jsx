import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
    background-color: #2c3e50;
    display: flex;
    justify-content: center;
    h1 {
        font-family: "Roboto", sans-serif;
        text-transform: uppercase;
        color: #ececec;
    }
`;

const Header = () => {
    return (
        <Nav>
            <h1>Chat Anónimo</h1>
        </Nav>
    );
};

export default Header;
