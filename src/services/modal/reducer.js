import { CLOSE_MODAL, OPEN_MODAL, SET_CURRENT_INGREDIENT } from "./actions";

const initialState = {
    isOpen: false,
    type: null,
    currentIngredient: null
}

const modalReducer = (state = initialState, action) => {
    switch(action.type) {
        case(SET_CURRENT_INGREDIENT): {
            return {...state, currentIngredient: action.payload}
        }
        case (OPEN_MODAL): {
            return {...state, isOpen: true, type: action.payload}
        }
        case (CLOSE_MODAL): {
            return {
                isOpen: false,
                type: null,
                currentIngredient: null,
            }
        }
        default:
            return state;
    }
}

export default modalReducer;