import React, { useReducer } from "react";
import GrupoContext from "./grupoContext";
import GrupoReducer from "./grupoReducer";

const GrupoState = ({ children }) => {
    const initialState = {
        grupos: [],
    };
    const [state, dispatch] = useReducer(GrupoReducer, initialState);
    // Funciones
    return (
        <GrupoContext.Provider value={{ grupos: state.grupos }}>
            {children}
        </GrupoContext.Provider>
    );
};

export default GrupoState;
