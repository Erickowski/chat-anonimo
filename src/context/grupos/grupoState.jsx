import React, { useReducer } from "react";
import { v4 as uuid } from "uuid";

import GrupoContext from "./grupoContext";
import GrupoReducer from "./grupoReducer";

import { CREAR_GRUPO } from "../../types";

const GrupoState = ({ children }) => {
    const initialState = {
        grupos: [
            {
                id: uuid(),
                nombre: "Amigos",
                integrantes: [1, 2],
            },
            {
                id: uuid(),
                nombre: "Todos",
                integrantes: [1, 2, 3],
            },
        ],
    };
    const [state, dispatch] = useReducer(GrupoReducer, initialState);
    // Funciones
    const crearGrupo = (grupo, contactos) => {
        dispatch({
            type: CREAR_GRUPO,
            payload: {
                id: uuid(),
                nombre: grupo,
                integrantes: contactos,
            },
        });
    };
    return (
        <GrupoContext.Provider value={{ grupos: state.grupos, crearGrupo }}>
            {children}
        </GrupoContext.Provider>
    );
};

export default GrupoState;
