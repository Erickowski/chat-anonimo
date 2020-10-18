import { CREAR_CONTACTO } from "../../types";

export default (state, action) => {
    switch (action.type) {
        case CREAR_CONTACTO:
            return {
                ...state,
                contactos: [...state.contactos, action.payload],
            };
        default:
            return state;
    }
};
