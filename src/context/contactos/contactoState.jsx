import React, { useReducer } from "react";
import { v4 as uuid } from "uuid";

import ContactoContext from "./contactoContext";
import ContactoReducer from "./contactoReducer";

import { CREAR_CONTACTO } from "../../types";

const ContactoState = ({ children }) => {
    const initialState = {
        contactos: [
            {
                id: 1,
                nombre: "Daniel",
            },
            {
                id: 2,
                nombre: "Perez",
            },
        ],
    };
    const [state, dispatch] = useReducer(ContactoReducer, initialState);
    // Funciones
    const crearContacto = (contacto) => {
        dispatch({
            type: CREAR_CONTACTO,
            payload: {
                id: uuid(),
                nombre: contacto,
            },
        });
    };
    return (
        <ContactoContext.Provider
            value={{ contactos: state.contactos, crearContacto }}
        >
            {children}
        </ContactoContext.Provider>
    );
};

export default ContactoState;
