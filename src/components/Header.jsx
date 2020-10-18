import React, { useState, useContext } from "react";
import styled from "styled-components";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";

import AuthContext from "../context/auth/authContext";

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: "absolute",
        width: 450,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

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
    const { usuario, cerrarSesion } = authContext;

    const [modalStyle] = useState(getModalStyle);
    const classes = useStyles();

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
                    <Modal
                        open={modalContact}
                        onClose={() => {
                            closeModalContact();
                        }}
                    >
                        <div style={modalStyle} className={classes.paper}>
                            <h2>Hola desde modal Contacto</h2>
                        </div>
                    </Modal>
                    <Modal
                        open={modalGroup}
                        onClose={() => {
                            closeModalGroup();
                        }}
                    >
                        <div style={modalStyle} className={classes.paper}>
                            <h2>Hola desde modal Grupo</h2>
                        </div>
                    </Modal>
                    <Modal
                        open={modalName}
                        onClose={() => {
                            closeModalName();
                        }}
                    >
                        <div style={modalStyle} className={classes.paper}>
                            <h2>Hola desde modal Name</h2>
                        </div>
                    </Modal>
                </div>
            ) : (
                <h1>Chat Anónimo</h1>
            )}
        </Nav>
    );
};

export default Header;
