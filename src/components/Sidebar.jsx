import React, { useContext } from "react";
import styled from "styled-components";

import ContactoContext from "../context/contactos/contactoContext";
import GrupoContext from "../context/grupos/grupoContext";
import ChatContext from "../context/chats/chatContext";

const SidebarContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    font-family: "Roboto", sans-serif;
    ul li {
        display: flex;
        justify-content: space-evenly;
        i {
            cursor: pointer;
        }
    }
`;

const Sidebar = () => {
    const contactoContext = useContext(ContactoContext);
    const { contactos } = contactoContext;

    const grupoContext = useContext(GrupoContext);
    const { grupos } = grupoContext;

    const chatContext = useContext(ChatContext);
    const { chats, crearChat } = chatContext;

    return (
        <SidebarContainer>
            <h2>Tus chats</h2>
            {chats.length === 0 ? (
                <p>No tienes chats, crea uno.</p>
            ) : (
                <ul>
                    {chats.map((chat) => (
                        <li key={chat.id}>{chat.nombre}</li>
                    ))}
                </ul>
            )}
            <h2>Tus contactos</h2>
            {contactos.length === 0 ? (
                <p>No tienes contactos, crea uno.</p>
            ) : (
                <ul>
                    {contactos.map((contacto) => (
                        <li key={contacto.id}>
                            {contacto.nombre}{" "}
                            {chats.filter((chat) => chat.idType === contacto.id)
                                .length === 0 && (
                                <i
                                    onClick={() =>
                                        crearChat(
                                            contacto.nombre,
                                            contacto.id,
                                            "person"
                                        )
                                    }
                                    className="fas fa-plus"
                                ></i>
                            )}
                        </li>
                    ))}
                </ul>
            )}
            <h2>Tus grupos</h2>
            {grupos.length === 0 ? (
                <p>No tienes grupos, crea uno.</p>
            ) : (
                <ul>
                    {grupos.map((grupo) => (
                        <li key={grupo.id}>
                            {grupo.nombre}
                            {chats.filter((chat) => chat.idType === grupo.id)
                                .length === 0 && (
                                <i
                                    onClick={() =>
                                        crearChat(
                                            grupo.nombre,
                                            grupo.id,
                                            "group"
                                        )
                                    }
                                    className="fas fa-plus"
                                ></i>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </SidebarContainer>
    );
};

export default Sidebar;
