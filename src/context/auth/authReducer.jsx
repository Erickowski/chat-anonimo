const { REGISTRO_USUARIO, CERRAR_SESION } = require("../../types");

export default (state, action) => {
    switch (action.type) {
        case REGISTRO_USUARIO:
            return {
                ...state,
                usuario: action.payload,
            };
        case CERRAR_SESION:
            return {
                ...state,
                usuario: null,
            };
        default:
            return state;
    }
};
