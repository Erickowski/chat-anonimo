import React, { useState, useContext } from "react";

import styled from "styled-components";
import AuthContext from "../context/auth/authContext";

const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 50px;
    font-family: "Roboto", sans-serif;
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 50px;
        border: 2.5px solid #2c3e50;
        border-radius: 10px;
        input {
            margin: 20px 0;
        }
        .form-submit {
            width: 50%;
            padding: 10px 0;
            background-color: #2c3e50;
            border-color: #2c3e50;
            outline: none;
            color: #ececec;
            border-radius: 10px;
            cursor: pointer;
            transition: all ease-in-out 0.3s;
            &:hover {
                background-color: #ececec;
                color: #2c3e50;
            }
        }
        p {
            background-color: red;
            color: #ececec;
            padding: 5px;
            border-radius: 5px;
        }
    }
`;

const Login = (props) => {
    const [user, saveUser] = useState("");
    const [error, saveError] = useState(false);

    const authContext = useContext(AuthContext);
    const { usuario, registrarUsuario } = authContext;

    const onSubmit = (e) => {
        e.preventDefault();
        if (user.trim() === "") {
            saveError(true);
            return;
        }
        saveError(false);
        registrarUsuario(user);
        props.history.push("/home");
    };

    if (usuario) {
        props.history.push("/home");
    }

    return (
        <FormContainer>
            <form onSubmit={onSubmit}>
                {error && <p>El nombre es obligatorio</p>}
                <label htmlFor="">Elija su nombre de usuario:</label>
                <input
                    type="text"
                    value={user}
                    onChange={(e) => saveUser(e.target.value)}
                />
                <input
                    type="submit"
                    value="Iniciar sesión"
                    className="form-submit"
                />
            </form>
        </FormContainer>
    );
};

export default Login;
