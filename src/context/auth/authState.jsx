import React, { useReducer } from "react";
import AuthContext from "./authContext";
import AuthReducer from "./authReducer";

import { CERRAR_SESION, REGISTRO_USUARIO } from "../../types";

const AuthState = ({ children }) => {
    const initialState = {
        usuario: "Erick",
    };
    const [state, dispatch] = useReducer(AuthReducer, initialState);
    // Funciones
    const registrarUsuario = (datos) => {
        dispatch({
            type: REGISTRO_USUARIO,
            payload: datos,
        });
    };
    const cerrarSesion = () => {
        dispatch({
            type: CERRAR_SESION,
        });
    };
    return (
        <AuthContext.Provider
            value={{
                usuario: state.usuario,
                registrarUsuario,
                cerrarSesion,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthState;
