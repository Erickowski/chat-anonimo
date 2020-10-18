import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";

import Sidebar from "./Sidebar";

import AuthContext from "../context/auth/authContext";
import ChatContext from "../context/chats/chatContext";
import MessageContext from "../context/messages/messageContext";

const HomeContainer = styled.div`
    width: 100vw;
    display: grid;
    grid-template-columns: 30% 70%;
`;

const ChatContainer = styled.div`
    font-family: "Roboto", sans-serif;
`;

const InputContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

const MessageContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    p {
        margin: 0 10px;
    }
    .fa-trash-alt {
        cursor: pointer;
    }
`;

const Home = (props) => {
    const authContext = useContext(AuthContext);
    const { usuario } = authContext;

    const chatContext = useContext(ChatContext);
    const { chats, activeChat } = chatContext;

    const messageContext = useContext(MessageContext);
    const { mensajes, crearMensaje, eliminarMensaje } = messageContext;

    const [chatInfo, saveChatInfo] = useState("");
    const [message, saveMessage] = useState("");
    const [error, saveError] = useState(false);

    const mensajesChat = mensajes.filter(
        (mensaje) => mensaje.chatId === chatInfo.id
    );

    useEffect(() => {
        if (activeChat) {
            const chat = chats.filter((chat) => chat.id === activeChat);
            saveChatInfo(chat[0]);
        }
        if (!usuario) {
            props.history.push("/");
        }
    }, [activeChat]);

    const handleMessage = () => {
        if (message.trim() === "") {
            saveError(true);
            return;
        }
        saveError(false);
        crearMensaje(message, chatInfo.id);
        saveMessage("");
    };

    return (
        <HomeContainer>
            <Sidebar />
            <ChatContainer>
                {chats.length === 0 && (
                    <p>Aún no has creado un chat, crea uno.</p>
                )}
                {chats.length !== 0 && activeChat === null && (
                    <p>Aún no has seleccionado un chat, selecciona uno.</p>
                )}
                {activeChat && (
                    <>
                        <h2>{chatInfo.nombre}</h2>
                        <p>
                            Puedes empezar a enviar mensajes en el cuadro de
                            abajo.
                        </p>
                        {error && (
                            <p className="error-message">
                                No puedes enviar mensajes vaciós
                            </p>
                        )}
                        <InputContainer>
                            <input
                                type="text"
                                value={message}
                                onChange={(e) => saveMessage(e.target.value)}
                            />
                            <button
                                type="button"
                                onClick={() => handleMessage()}
                            >
                                Enviar mensaje
                            </button>
                        </InputContainer>
                        <h3>Tus mensajes</h3>
                        {mensajesChat.length === 0 ? (
                            <p>Aún no tienes mensajes con este contacto.</p>
                        ) : (
                            mensajesChat.map((mensaje) => (
                                <MessageContainer>
                                    <i className="fas fa-user"></i>
                                    <p>{mensaje.mensaje}</p>
                                    <i
                                        className="fas fa-trash-alt"
                                        onClick={() =>
                                            eliminarMensaje(mensaje.id)
                                        }
                                    ></i>
                                </MessageContainer>
                            ))
                        )}
                    </>
                )}
            </ChatContainer>
        </HomeContainer>
    );
};

export default Home;
