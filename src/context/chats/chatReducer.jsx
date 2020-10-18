import { CREAR_CHAT } from "../../types";

export default (state, action) => {
    switch (action.type) {
        case CREAR_CHAT:
            return {
                ...state,
                chats: [...state.chats, action.payload],
            };
        default:
            return state;
    }
};
