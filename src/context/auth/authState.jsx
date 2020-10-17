import React, { useReducer } from "react";
import AuthContext from "./authContext";
import AuthReducer from "./authReducer";

import { REGISTRO_USUARIO } from "../../types";

const AuthState = ({ children }) => {
    const initialState = {
        usuario: null,
    };
    const [state, dispatch] = useReducer(AuthReducer, initialState);
    // Funciones
    const registrarUsuario = (datos) => {
        dispatch({
            type: REGISTRO_USUARIO,
            payload: datos,
        });
    };
    return (
        <AuthContext.Provider
            value={{
                usuario: state.usuario,
                registrarUsuario,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthState;
