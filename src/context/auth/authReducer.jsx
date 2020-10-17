const { REGISTRO_USUARIO } = require("../../types");

export default (state, action) => {
    switch (action.type) {
        case REGISTRO_USUARIO:
            return {
                ...state,
                usuario: action.payload,
            };
        default:
            return state;
    }
};
