import React, { useReducer } from "react";
import { v4 as uuid } from "uuid";

import MessageContext from "./messageContext";
import MessageReducer from "./messageReducer";

import { CREAR_MENSAJE } from "../../types";

const MessageState = ({ children }) => {
    const initialState = {
        mensajes: [],
    };

    const [state, dispatch] = useReducer(MessageReducer, initialState);

    // Funciones
    const crearMensaje = (mensaje, chatId) => {
        dispatch({
            type: CREAR_MENSAJE,
            payload: {
                id: uuid(),
                mensaje: mensaje,
                chatId: chatId,
            },
        });
    };

    return (
        <MessageContext.Provider
            value={{ mensajes: state.mensajes, crearMensaje }}
        >
            {children}
        </MessageContext.Provider>
    );
};

export default MessageState;
