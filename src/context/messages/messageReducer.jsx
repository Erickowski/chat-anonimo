import { CREAR_MENSAJE } from "../../types";

export default (state, action) => {
    switch (action.type) {
        case CREAR_MENSAJE:
            return {
                ...state,
                mensajes: [...state.mensajes, action.payload],
            };
        default:
            return state;
    }
};
