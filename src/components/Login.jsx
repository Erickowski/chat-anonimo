import React, { useState, useContext } from "react";

import styled from "styled-components";
import AuthContext from "../context/auth/authContext";

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
        <div className="form-container">
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
        </div>
    );
};

export default Login;
