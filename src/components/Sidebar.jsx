import React, { useContext, useState } from "react";
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
    const { chats, crearChat, abrirChat, activeChat } = chatContext;

    const [filterContacts, saveFilterContacts] = useState("");
    const [filterGroups, saveFilterGroups] = useState("");

    const [contacts, saveContacts] = useState([...contactos]);
    const [groups, saveGroups] = useState([...grupos]);

    const handleFilterContacts = (e) => {
        saveFilterContacts(e.target.value);

        saveContacts(
            contactos.filter((contacto) =>
                contacto.nombre
                    .toLowerCase()
                    .includes(e.target.value.toLowerCase())
            )
        );
    };
    const handleFilterGroups = (e) => {
        saveFilterGroups(e.target.value);

        saveGroups(
            grupos.filter((grupo) =>
                grupo.nombre
                    .toLowerCase()
                    .includes(e.target.value.toLowerCase())
            )
        );
    };

    return (
        <SidebarContainer>
            <h2>Tus chats</h2>
            {chats.length === 0 ? (
                <p>No tienes chats, crea uno.</p>
            ) : (
                <ul>
                    {chats.map((chat) => (
                        <li key={chat.id}>
                            {chat.nombre}{" "}
                            {activeChat !== chat.id && (
                                <i
                                    onClick={() => abrirChat(chat.id)}
                                    className="fas fa-comments"
                                ></i>
                            )}
                        </li>
                    ))}
                </ul>
            )}
            <h2>Tus contactos</h2>
            {contacts.length === 0 ? (
                <p>No tienes contactos, crea uno.</p>
            ) : (
                <>
                    <p>Escribe aqui para buscar contactos por nombre</p>
                    <input
                        type="text"
                        value={filterContacts}
                        onChange={(e) => handleFilterContacts(e)}
                    />
                    <ul>
                        {contacts.map((contacto) => (
                            <li key={contacto.id}>
                                {contacto.nombre}{" "}
                                {chats.filter(
                                    (chat) => chat.idType === contacto.id
                                ).length === 0 && (
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
                </>
            )}
            <h2>Tus grupos</h2>
            {groups.length === 0 ? (
                <p>No tienes grupos, crea uno.</p>
            ) : (
                <>
                    <p>Escribe aqui para buscar grupos por nombre</p>
                    <input
                        type="text"
                        value={filterGroups}
                        onChange={(e) => handleFilterGroups(e)}
                    />
                    <ul>
                        {groups.map((grupo) => (
                            <li key={grupo.id}>
                                {grupo.nombre}
                                {chats.filter(
                                    (chat) => chat.idType === grupo.id
                                ).length === 0 && (
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
                </>
            )}
        </SidebarContainer>
    );
};

export default Sidebar;
