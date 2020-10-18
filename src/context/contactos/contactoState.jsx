import React, { useReducer } from "react";
import ContactoContext from "./contactoContext";
import ContactoReducer from "./contactoReducer";

const ContactoState = ({ children }) => {
    const initialState = {
        contactos: [],
    };
    const [state, dispatch] = useReducer(ContactoReducer, initialState);
    // Funciones
    return (
        <ContactoContext.Provider value={{ contactos: state.contactos }}>
            {children}
        </ContactoContext.Provider>
    );
};

export default ContactoState;
