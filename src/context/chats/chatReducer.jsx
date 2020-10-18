import { CREAR_CHAT, ABRIR_CHAT } from "../../types";

export default (state, action) => {
    switch (action.type) {
        case ABRIR_CHAT:
            return {
                ...state,
                activeChat: action.payload,
            };
        case CREAR_CHAT:
            return {
                ...state,
                chats: [...state.chats, action.payload],
            };
        default:
            return state;
    }
};
