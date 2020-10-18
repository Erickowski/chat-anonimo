import React, { useContext } from "react";
import styled from "styled-components";

import ContactoContext from "../context/contactos/contactoContext";
import GrupoContext from "../context/grupos/grupoContext";

const SidebarContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    font-family: "Roboto", sans-serif;
`;

const Sidebar = () => {
    const contactoContext = useContext(ContactoContext);
    const { contactos } = contactoContext;

    const grupoContext = useContext(GrupoContext);
    const { grupos } = grupoContext;

    return (
        <SidebarContainer>
            <h2>Tus contactos</h2>
            {contactos.length === 0 ? (
                <p>No tienes contactos, crea uno.</p>
            ) : (
                <ul>
                    {contactos.map((contacto) => (
                        <li key={contacto.id}>{contacto.nombre}</li>
                    ))}
                </ul>
            )}
            <h2>Tus grupos</h2>
            {grupos.length === 0 ? (
                <p>No tienes grupos, crea uno.</p>
            ) : (
                <ul>
                    {grupos.map((grupo) => (
                        <li key={grupo.id}>{grupo.nombre}</li>
                    ))}
                </ul>
            )}
        </SidebarContainer>
    );
};

export default Sidebar;
