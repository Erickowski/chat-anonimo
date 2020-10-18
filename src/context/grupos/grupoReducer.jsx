import { CREAR_GRUPO } from "../../types";

export default (state, action) => {
    switch (action.type) {
        case CREAR_GRUPO:
            return {
                ...state,
                grupos: [...state.grupos, action.payload],
            };
        default:
            return state;
    }
};
