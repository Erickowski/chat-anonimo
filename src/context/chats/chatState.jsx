import React, { useReducer } from "react";
import { v4 as uuid } from "uuid";

import ChatContext from "./chatContext";
import ChatReducer from "./chatReducer";

import { CREAR_CHAT, ABRIR_CHAT } from "../../types";

const ChatState = ({ children }) => {
    const initialState = {
        chats: [],
        activeChat: null,
    };

    const [state, dispatch] = useReducer(ChatReducer, initialState);

    // Funciones
    const crearChat = (chat, idType, typeChat) => {
        dispatch({
            type: CREAR_CHAT,
            payload: {
                id: uuid(),
                nombre: chat,
                idType: idType,
                type: typeChat,
            },
        });
    };

    const abrirChat = (chatId) => {
        dispatch({
            type: ABRIR_CHAT,
            payload: chatId,
        });
    };

    return (
        <ChatContext.Provider
            value={{
                chats: state.chats,
                activeChat: state.activeChat,
                crearChat,
                abrirChat,
            }}
        >
            {children}
        </ChatContext.Provider>
    );
};

export default ChatState;
