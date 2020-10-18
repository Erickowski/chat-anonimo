import { CREAR_MENSAJE, ELIMINAR_MENSAJE } from "../../types";

export default (state, action) => {
    switch (action.type) {
        case CREAR_MENSAJE:
            return {
                ...state,
                mensajes: [...state.mensajes, action.payload],
            };
        case ELIMINAR_MENSAJE:
            return {
                ...state,
                mensajes: [
                    ...state.mensajes.filter(
                        (mensaje) => mensaje.id !== action.payload
                    ),
                ],
            };
        default:
            return state;
    }
};
