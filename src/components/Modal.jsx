import React, { useState } from "react";
import ModalContainer from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";

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
}) => {
    const [modalStyle] = useState(getModalStyle);
    const classes = useStyles();

    const [name, saveName] = useState("");
    const [error, saveError] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        if (name.trim() === "") {
            saveError(true);
            return;
        }
        saveError(false);
        funcionRegistro(name);
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
                <div className="form-container">
                    <form onSubmit={onSubmit}>
                        {error && <p>El nombre es obligatorio</p>}
                        <label htmlFor="">{textLabel}</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => saveName(e.target.value)}
                        />
                        <input
                            type="submit"
                            value={textSubmit}
                            className="form-submit"
                        />
                    </form>
                </div>
            </div>
        </ModalContainer>
    );
};

export default Modal;
