import React, { useState } from "react";
import ModalContainer from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";

import styled from "styled-components";

const ContactContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
`;

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

const Modal = ({
    modal,
    funcionRegistro,
    setModal,
    closeModal,
    textSubmit,
    textLabel,
    textError,
    contactos,
}) => {
    const [modalStyle] = useState(getModalStyle);
    const classes = useStyles();

    const [name, saveName] = useState("");
    const [error, saveError] = useState(false);
    const [contact, saveContact] = useState([]);

    const onSubmit = (e) => {
        e.preventDefault();
        if (name.trim() === "") {
            saveError(true);
            return;
        }
        if (contactos && contact.length === 0) {
            saveError(true);
            return;
        }
        saveError(false);
        !contactos ? funcionRegistro(name) : funcionRegistro(name, contact);
        setModal(false);
    };

    return (
        <ModalContainer
            open={modal}
            onClose={() => {
                closeModal();
            }}
        >
            <div style={modalStyle} className={classes.paper}>
                {textSubmit === "Crear grupo" && contactos.length === 0 ? (
                    <p>No tienes contactos, ve a crear uno.</p>
                ) : (
                    <div className="form-container">
                        <form onSubmit={onSubmit}>
                            {error && <p>{textError}</p>}
                            <label htmlFor="">{textLabel}</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => saveName(e.target.value)}
                            />
                            {textSubmit === "Crear grupo" && (
                                <fieldset>
                                    <legend>
                                        Selecciona los contactos del grupo
                                    </legend>
                                    <ContactContainer>
                                        {contactos.map((contacto) => (
                                            <div key={contacto.id}>
                                                <input
                                                    type="checkbox"
                                                    name="action"
                                                    value={contacto.id}
                                                    onChange={(e) => {
                                                        e.target.checked
                                                            ? saveContact([
                                                                  ...contact,
                                                                  contacto.id,
                                                              ])
                                                            : saveContact([
                                                                  ...contact.filter(
                                                                      (c) =>
                                                                          c !==
                                                                          contacto.id
                                                                  ),
                                                              ]);
                                                    }}
                                                />
                                                <label>{contacto.nombre}</label>
                                            </div>
                                        ))}
                                    </ContactContainer>
                                </fieldset>
                            )}
                            <input
                                type="submit"
                                value={textSubmit}
                                className="form-submit"
                            />
                        </form>
                    </div>
                )}
            </div>
        </ModalContainer>
    );
};

export default Modal;
