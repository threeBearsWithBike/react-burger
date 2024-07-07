import { ADD_INGREDIENT, DELETE_INGREDIENT, GET_INGREDIENTS_FAILURE, GET_INGREDIENTS_REQUIEST, GET_INGREDIENTS_SUCCES } from "./actions";

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
                            .filter((ingredient) => ingredient.key !== action.payload);
            return {...state, constructorIngredients: {...state.constructorIngredients, primary: newPrimary}}
        }

        default:
            return state;
    }
}

export default constructorReducer;