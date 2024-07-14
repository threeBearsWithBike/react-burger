import { ADD_INGREDIENT, GET_MOVE, DELETE_INGREDIENT, GET_INGREDIENTS_FAILURE,
        GET_INGREDIENTS_REQUIEST, GET_INGREDIENTS_SUCCES, GET_CONSTRUCTOR_CLEANUP } from "./actions";

const constructorState = {
    ingredients: [],
    constructorIngredients: {
        buns: null,
        primary: []
    },
    error: null,
    isLoading: false,
}

const constructorReducer = (state = constructorState, action) => {
    
    switch(action.type) {

        case(GET_INGREDIENTS_REQUIEST): {
            return {...state, isLoading: true}
        }

        case(GET_INGREDIENTS_SUCCES): {
            return {...state, isLoading: false, error: null, ingredients: action.payload}
        }

        case(GET_INGREDIENTS_FAILURE): {
            return {...state, isLoading: false, error: action.payload, ingredients: []}
        }

        case(ADD_INGREDIENT): {
            if (action.payload.type === 'bun') {
                return {...state, constructorIngredients: {...state.constructorIngredients, buns: action.payload}}
            } else {
                return {...state, constructorIngredients: {...state.constructorIngredients, primary: [...state.constructorIngredients.primary, action.payload]}}
            }
        }

        case(DELETE_INGREDIENT): {
            let newPrimary = state.constructorIngredients.primary
                            .filter((ingredient) => ingredient.id !== action.payload);
            return {...state, constructorIngredients: {...state.constructorIngredients, primary: newPrimary}}
        }

        case(GET_MOVE): {
            const newPrimary = [...state.constructorIngredients.primary];
            const {dragIndex, hoverIndex} = action.payload;
            [newPrimary[dragIndex], newPrimary[hoverIndex]] = [newPrimary[hoverIndex], newPrimary[dragIndex]];
            return {...state, constructorIngredients: {...state.constructorIngredients, primary: newPrimary}}
        }

        case(GET_CONSTRUCTOR_CLEANUP): {
            return {...state, constructorIngredients: {buns: null, primary: []}}
        }

        default:
            return state;
    }
}

export default constructorReducer;