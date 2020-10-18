import React, { useState, useContext } from "react";
import styled from "styled-components";

import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";

import AuthContext from "../context/auth/authContext";
import ModalContainer from "./Modal";

const Nav = styled.nav`
    background-color: #2c3e50;
    display: flex;
    justify-content: center;
    font-family: "Roboto", sans-serif;
    h1 {
        text-transform: uppercase;
        color: #ececec;
    }
    div {
        display: flex;
        width: 90%;
        justify-content: space-between;
        color: #ececec;
        p span {
            font-weight: bold;
        }
        ul {
            list-style: none;
            li {
                display: inline;
                margin: 0 10px;
                cursor: pointer;
            }
        }
    }
`;

const Header = () => {
    const history = useHistory();

    const authContext = useContext(AuthContext);
    const { usuario, cerrarSesion, registrarUsuario } = authContext;

    const [modalContact, setModalContact] = useState(false);
    const [modalGroup, setModalGroup] = useState(false);
    const [modalName, setModalName] = useState(false);

    const openModalContact = () => {
        setModalContact(true);
    };

    const closeModalContact = () => {
        setModalContact(false);
    };

    const openModalGroup = () => {
        setModalGroup(true);
    };

    const closeModalGroup = () => {
        setModalGroup(false);
    };

    const openModalName = () => {
        setModalName(true);
    };

    const closeModalName = () => {
        setModalName(false);
    };

    const handleCloseSession = () => {
        Swal.fire({
            title: "¿Estás seguro?",
            text: "¡Perderas toda la información!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText: "Cancelar",
            confirmButtonText: "¡Si, cierra sesión!",
        }).then((result) => {
            if (result.isConfirmed) {
                cerrarSesion();
                history.push("/");
                Swal.fire(
                    "¡Sesión cerrada!",
                    "Has cerrado sesión exitosamente.",
                    "success"
                );
            }
        });
    };

    return (
        <Nav>
            {usuario ? (
                <div>
                    <p>
                        Hola <span>{usuario}</span>
                    </p>
                    <ul>
                        <li onClick={() => openModalContact()}>
                            Crear contacto
                        </li>
                        <li onClick={() => openModalGroup()}>Crear grupo</li>
                        <li onClick={() => openModalName()}>Cambiar nombre</li>
                        <li onClick={() => handleCloseSession()}>
                            Cerrar sesión
                        </li>
                    </ul>
                    {modalContact && (
                        <ModalContainer
                            modal={modalContact}
                            funcionRegistro={registrarUsuario}
                            setModal={setModalContact}
                            closeModal={closeModalContact}
                            textSubmit="Crear contacto"
                            textLabel="Escriba el nombre del nuevo contacto:"
                        />
                    )}
                    {modalGroup && (
                        <ModalContainer
                            modal={modalGroup}
                            funcionRegistro={registrarUsuario}
                            setModal={setModalGroup}
                            closeModal={closeModalGroup}
                            textSubmit="Crear grupo"
                            textLabel="Escriba el nombre del nuevo grupo:"
                        />
                    )}
                    {modalName && (
                        <ModalContainer
                            modal={modalName}
                            funcionRegistro={registrarUsuario}
                            setModal={setModalName}
                            closeModal={closeModalName}
                            textSubmit="Cambiar nombre"
                            textLabel="Cambie su nombre de usuario:"
                        />
                    )}
                </div>
            ) : (
                <h1>Chat Anónimo</h1>
            )}
        </Nav>
    );
};

export default Header;
